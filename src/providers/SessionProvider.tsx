import { type ReactNode, useEffect } from "react";
import { useCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, setCredentials } from "@/redux/features/auth/authSlice";

interface SessionProviderProps {
  children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const { data: user, isLoading, isError } = useCurrentUserQuery();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  useEffect(() => {
    if (user) {
      dispatch(setCredentials({ user: user?.data }));
    }
  }, [user, dispatch]);

  if (isLoading || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading session...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error loading session. Please try again.</p>
      </div>
    );
  }

  return <>{children}</>;
}

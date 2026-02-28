import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/pages/auth/authSchema";
import type { LoginFormData } from "@/pages/auth/authSchema";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { errorToast } from "@/utils/errorToast";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router";
import { AtSign, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [signIn, { isLoading }] = useLoginMutation();
  const [passwordShow, setPasswordShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (formData: LoginFormData) => {
    try {
      const { data } = await signIn(formData).unwrap();
      toast.success("sign up success");
      dispatch(setCredentials({ user: data.user, token: data.accessToken }));
      navigate("/candidate", { replace: true });
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-155.5 px-16 bg-background border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="border-0 border-b-2 rounded-none px-0 py-5 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-invalid={!!form.formState.errors.email}
                    {...form.register("email")}
                  />

                  <AtSign className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                {form.formState.errors.email && (
                  <FieldError errors={[form.formState.errors.email]} />
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={passwordShow ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-0 border-b-2 rounded-none px-0 py-5 pr-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-invalid={!!form.formState.errors.password}
                    {...form.register("password")}
                  />
                  <div
                    onClick={() => setPasswordShow(!passwordShow)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                  >
                    {passwordShow ? <Eye /> : <EyeClosed />}
                  </div>
                </div>
                {form.formState.errors.password && (
                  <FieldError errors={[form.formState.errors.password]} />
                )}
              </Field>
              <Field>
                <Button type="submit">
                  {isLoading ? "Logging..." : "Login"}
                </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

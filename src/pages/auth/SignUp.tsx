import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { signUpSchema, type signUpFormData } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const form = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data: signUpFormData) => {
    console.log(data);
  };
  return (
    <div className="">
      <Card className="w-full sm:max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Sign up form</CardTitle>
          <CardDescription>this for sing up</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                <Input
                  id="firstName"
                  type="text"
                  aria-invalid={!!form.formState.errors.firstName}
                  placeholder="John"
                  {...form.register("firstName")}
                />
                {}
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">lastName</FieldLabel>
                <Input
                  {...form.register("lastName")}
                  id="lastName"
                  type="text"
                  aria-invalid={!!form.formState.errors.lastName}
                  placeholder="don"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  {...form.register("phone")}
                  id="phone"
                  type="tel"
                  aria-invalid={!!form.formState.errors.phone}
                  placeholder="+88015484234"
                />
                {form.formState.errors.phone && (
                  <FieldError errors={[form.formState.errors.phone]} />
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="email">email</FieldLabel>
                <Input
                  {...form.register("email")}
                  id="email"
                  aria-invalid={!!form.formState.errors.email}
                  type="email"
                  placeholder="example@gmail.com"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  {...form.register("password")}
                  id="password"
                  aria-invalid={!!form.formState.errors.password}
                  placeholder="124@rrr"
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" form="form-rhf-demo">
            Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

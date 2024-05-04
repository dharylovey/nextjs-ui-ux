import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default function SignUpForm() {
  return (
    <>
      <div className="flex max-w-sm mx-auto mt-[25vh]">
        <Button
          className="flex justify-center items-center"
        >
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
      <Card className="mx-auto max-w-sm flex flex-col mt-4">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>Enter your email below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Forgot Password
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

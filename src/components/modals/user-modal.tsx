import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../ui/field";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/password-input";
import { useState  } from "react";

function UserModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  console.log(setLoading);
  

  // function onSubmit(e: FormEventHandler<HTMLFieldSetElement>): void {
  //   setLoading(true);
  //   console.log(e, "eventtttttt");
    
  //   const timer = setTimeout(() => {
  //     toast("Event has been created", {
  //       position: "top-center",
  //       action: {
  //         label: "Undo",
  //         onClick: () => console.log("Undo"),
  //       },
  //     });
  //     setLoading((prev) => prev != prev);
  //     return clearTimeout(timer);
  //   }, 1000);
  // }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Signup</DialogTitle>
          </DialogHeader>
          <div className="w-full max-w-md">
            <FieldSet onSubmit={onClose}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input id="username" type="text" placeholder="Max Leiter" />
                  <FieldDescription>
                    Choose a unique username for your account.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <FieldDescription>
                    Must be at least 8 characters long.
                  </FieldDescription>
                  <PasswordInput
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </Field>
              </FieldGroup>
              <div className="flex items-center justify-end gap-5">
                <Button size={"lg"} variant={"ghost"} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  size={"lg"}
                  variant={"default"}
                  disabled={loading}
                  type="submit"
                  onClick={onClose}
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    " Submit"
                  )}
                </Button>
              </div>
            </FieldSet>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default UserModal;

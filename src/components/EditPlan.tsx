import { useState } from "react";
import { Button, Dialog } from "@material-ui/core";
import { EditPlanView } from "./EditPlanView";

/**
 * State wrapper for the edit plan process.
 * Renders a button that when clicked show a dialog with the EditPlanView.
 * (Is a separate component to make sure as few components as possible gets re-rendered when toggling the dialog)
 */
export const EditPlan = () => {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  return (
    <>
      <Button onClick={show} />
      <Dialog open={open} onClose={hide}>
        <EditPlanView />
      </Dialog>
    </>
  );
};

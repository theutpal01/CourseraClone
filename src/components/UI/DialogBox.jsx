import Button from "./Button";
import { CgClose } from "react-icons/cg";

const DialogBox = ({ dialog, children, handleClose }) => {
	return (
		<>
			{dialog && (
				<>
					<div className="fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-50"></div>
					<div className="fixed max-w-4xl w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-96 h-full z-50 rounded bg-white p-5">
						<div className="flex flex-row-reverse text-neutral justify-between w-full">
							<Button
								className="font-medium flex gap-1 items-center"
								variant="primary"
								size="sm"
								type="ghost"
								onCLick={handleClose}
							>
								<p>Close</p>
								<CgClose className="size-4" />
							</Button>
							{children}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default DialogBox;

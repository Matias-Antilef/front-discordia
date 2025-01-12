import { MessagesModel } from "../models/message";

function MessageItem({
  index,
  message,
}: {
  index: number;
  message: MessagesModel;
}) {
  return (
    <li className="py-1" key={index}>
      <div className="space-x-0">
        <h4 className="font-semibold text-orange-400 my-1">
          {message.fromUser}
        </h4>
        <p className="text-neutral-100">{message.content}</p>
      </div>
    </li>
  );
}
export default MessageItem;

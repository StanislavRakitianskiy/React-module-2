interface MailboxProps {
  username: string;
  message: string[];
  underMessage: string[];
}
export default function Mailbox({
  username,
  message,
  underMessage,
}: MailboxProps) {
  return (
    <>
      <p>Hello {username}</p>
      {message.length > 0 && <p>You have {message.length} unread messages</p>}
      <p>
        {underMessage.length > 0
          ? `You have ${underMessage.length} unread messages`
          : "No unread messages"}
      </p>
    </>
  );
}

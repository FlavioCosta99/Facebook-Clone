interface IAlert {
  color: string;
  title: string;
  message: string;
  style?: Object;
}

export default function Alert({ color, title, message, style }: IAlert) {
  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative `}
      style={{ ...style, fontSize: '13px' }}
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline ml-2">{message}</span>
    </div>
  );
}

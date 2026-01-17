type Props = {
  label: string;
  onClick?: () => void;
  variant?: string; // primary, secondary, danger, etc.
};

export default function Button({ label, onClick, variant = "primary" }: Props) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

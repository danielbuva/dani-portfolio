export default function ResumePDF() {
  return (
    <div className="absolute inset-0 h-screen w-screen">
      <embed
        src="/daniresume.pdf"
        width="100%"
        height="100%"
        type="application/pdf"
      />
    </div>
  );
}

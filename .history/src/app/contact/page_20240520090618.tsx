import Image from "next/image";
function ContactPage() {
  return (
    <div className="h-full w-full">
      <div className="w-2/3 h-full relative">
        <Image src="/contact.png"></Image>
      </div>
    </div>
  );
}

export default ContactPage;

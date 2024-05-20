import Image from "next/image";
function ContactPage() {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-2/3">
        <Image src="/contact.png" alt="Contact image" fill></Image>
      </div>
    </div>
  );
}

export default ContactPage;

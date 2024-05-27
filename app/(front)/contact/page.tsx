import React from "react";
import Link from "next/link";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-4 w-96 text-start">
        <h1 className="text-4xl">Contact</h1>
        <Link href={'/'}>&larr; Home</Link>
        <p>This is the contact page</p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          doloremque alias labore molestias adipisci, repellat possimus vitae
          aliquam tempora hic, enim nostrum eligendi numquam illo, autem soluta
          aliquid praesentium veniam?
        </p>
      </div>
    </div>
  );
}

export default Contact;

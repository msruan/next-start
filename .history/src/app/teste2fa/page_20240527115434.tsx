"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [_2faStatus, set2FAStatus] = useState<
    "enabled" | "disabled" | "initializing"
  >("disabled");

  const [qrData, setQRData] = useState<string>();
  const [userToken, setUserToken] = useState("");
  const [errorText, setErrorText] = useState("");

  const [qrSecret, setQRSecret] = useState<string>();

  /**
   * The handleClick function initializes 2FA status, fetches a QR code from an API endpoint, and sets
   * the QR data and secret in the state.
   */
  const handleClick = async () => {
    set2FAStatus("initializing");

    const response = await fetch("/api/auth/2fa/qrcode");
    console.log("mano a response eh ", response);

    const data = await response.json();

    setQRData(data.data);

    setQRSecret(data.secret);
  };
  /**
   * The handleSubmit function sends a request to verify a two-factor authentication token and updates
   * the 2FA status based on the response.
   */
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(
      `/api/2fa/verify?secret=${qrSecret}&token=${userToken}`,
    );

    const data = await response.json();

    if (data.verified) {
      set2FAStatus("enabled");

      setErrorText("");
    } else {
      setUserToken("");

      setErrorText("Failed. Please scan the QR code and repeat verification.");
    }
  };

  return (
    <>
      <Button onClick={handleClick}>Enable 2FA</Button>
      {qrData && (
        <>
          <Image width={200} height={200} src={qrData} alt="2FA QR Code" />
          <form className="">
            <Label htmlFor="token">Digite o token</Label>
            <Input
              defaultValue={userToken}
              id="token"
              type="number"
              maxLsength={6}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUserToken(e.target.value);
              }}
            ></Input>
            <Button>Submit</Button>
            <div>{errorText}</div>
          </form>
        </>
      )}
    </>
  );
}

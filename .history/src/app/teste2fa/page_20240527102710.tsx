"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {

    const [_2faStatus, set2FAStatus] = useState<"enabled" | "disabled" | "initializing">("disabled");
  
    const [qrData, setQRData] = useState<string>();
  
    const [qrSecret, setQRSecret] = useState<string>();
    const handleClick = 
  
    return (
  
      {/* ... */}
  
      <Button onClick={}>
  
        Enable 2FA
  
      </Button>
  
      {/* ... */}
  
      <img src={qrData} alt="2FA QR Code" />
  
      {/* ... */}
  
    );
  
  }
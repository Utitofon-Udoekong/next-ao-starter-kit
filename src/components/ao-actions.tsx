'use client';

import { Button } from '@/components/ui/button';
import { Send, UserPlus } from 'lucide-react';
import { message, result, createDataItemSigner } from '@permaweb/aoconnect';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function AOActions() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const register = async () => {
    try {
      setIsLoading(true);
      const messageId = await message({
        process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM",
        tags: [
          {name: "Action", value: "Register"}
        ],
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const _result = await result({
        message: messageId,
        process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM"
      });

      toast({
        title: "Registration Successful",
        description: "You have been registered with AO",
      });
      console.log("result:", _result);
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const broadcast = async () => {
    try {
      setIsLoading(true);
      const messageId = await message({
        process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM",
        tags: [
          {name: "Action", value: "Broadcast"}
        ],
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const _result = await result({
        message: messageId,
        process: "8brgmP3kCbHvgMjt-ryuJbNiGinVJw4tlx5qg11DGtM"
      });

      toast({
        title: "Broadcast Successful",
        description: "Your message has been broadcast",
      });
      console.log("result:", _result);
    } catch (error: any) {
      toast({
        title: "Broadcast Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      <Button size="lg" onClick={register} disabled={isLoading}>
        <UserPlus className="mr-2 h-4 w-4" />
        Register to chatroom
      </Button>
      <Button size="lg" variant="outline" onClick={broadcast} disabled={isLoading}>
        <Send className="mr-2 h-4 w-4" />
        Broadcast Message
      </Button>
    </div>
  );
}
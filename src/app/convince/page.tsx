"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { toast } from "@/hooks/use-toast";
import { useCustomToasts } from "@/hooks/use-custom-toasts";
import { CreateSubredditPayload } from "@/lib/validators/subreddit";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const convinces = [
  {
    title: "salary negotiation",
    description:
      "An HR manager in a tech startup is hiring a developer. Technical rounds are cleared. Now they have reached the negotiation point. Expectations of both parties is not matching.",
    agentsCount: 2,
    agent1: {
      title: "HR Manager",
    },
    agent2: {
      title: "Web Developer",
    },
  },
];

const Page = () => {
  return (
    <div className="container flex items-center flex-col h-full max-w-3xl mx-auto">
      <p>Convince</p>
      <div>
        {convinces.map((conv, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{conv.title}</CardTitle>
              <CardDescription>{conv.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <div>
                <Button className="mr-5">Play {conv.agent1.title}</Button>
                <Button>Play {conv.agent2.title}</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;

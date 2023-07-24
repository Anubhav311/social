import MiniCreatePost from "@/components/MiniCreatePost";
import PostFeed from "@/components/PostFeed";
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/config";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: {
    slug: string;
  };
}

const Tasks = [
  {
    title: "Hire a Developer",
    description:
      "You need to find a nodejs developer and hire him for your company. for 15 LPA",
    type: "honest",
  },
  {
    title: "Hire a Developer",
    description:
      "Hire a developer for 15 LPA, but actually you don't have enough money to pay his salary.",
    type: "dishonest",
  },
];

const page = async ({ params }: PageProps) => {
  const { slug } = params;

  const session = await getAuthSession();

  // const subreddit = await db.subreddit.findFirst({
  //   where: { name: slug },
  //   include: {
  //     posts: {
  //       include: {
  //         author: true,
  //         votes: true,
  //         comments: true,
  //         subreddit: true,
  //       },
  //       orderBy: {
  //         createdAt: "desc",
  //       },
  //       take: INFINITE_SCROLL_PAGINATION_RESULTS,
  //     },
  //   },
  // });

  // if (!subreddit) return notFound();

  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl h-14">{slug}</h1>
      {Tasks.map((conv, idx) => (
        <Card key={idx} className="mb-10">
          <CardHeader>
            <CardTitle>{conv.title}</CardTitle>
            <CardDescription>{conv.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{conv.type}</p>
          </CardContent>
          <CardFooter>
            <div>
              <Button className="mr-5">Find Candidates</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
      {/* <PostFeed initialPosts={subreddit.posts} subredditName={subreddit.name} /> */}
    </>
  );
};

export default page;

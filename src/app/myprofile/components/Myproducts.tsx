"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/s-card";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/s-tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Music, Book } from "lucide-react";

type Product = {
  id: number;
  title: string;
  type: "music" | "ebook";
  description: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Relaxing Beats",
    type: "music",
    description: "Calm instrumental tracks.",
  },
  {
    id: 2,
    title: "Jazz Essentials",
    type: "music",
    description: "Classic jazz collection.",
  },
  {
    id: 3,
    title: "Learn React Quickly",
    type: "ebook",
    description: "Beginner friendly React guide.",
  },
  {
    id: 4,
    title: "Advanced Next.js",
    type: "ebook",
    description: "Deep dive into Next.js 15.",
  },
  {
    id: 5,
    title: "Meditation Sounds",
    type: "music",
    description: "Ambient tracks for focus.",
  },
  {
    id: 6,
    title: "Mastering TypeScript",
    type: "ebook",
    description: "Level up your TS skills.",
  },
  // add more dummy items...
];

export default function ProductsTab() {
  const [filter, setFilter] = useState<"all" | "music" | "ebook">("all");
  const [page, setPage] = useState(1);
  const perPage = 4;

  const filtered =
    filter === "all"
      ? dummyProducts
      : dummyProducts.filter((p) => p.type === filter);
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <TabsContent value="products" className="space-y-6">
      <Card>
        <CardHeader className="flex-row justify-between">
          <div className="block">
            <CardTitle>My Products</CardTitle>
            <CardDescription>
              View and download your purchased items.
            </CardDescription>
          </div>
          <div className="flex justify-between items-center">
            <Select
              value={filter}
              onValueChange={(val: "all" | "music" | "ebook") => {
                setPage(1);
                setFilter(val);
              }}
            >
              <SelectTrigger className="w-40 focus-visible:ring-0 ring-fixnix-lightpurple">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="ebook">E-Books</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">
                    {product.title}
                  </CardTitle>
                  {product.type === "music" ? (
                    <Music className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Book className="h-5 w-5 text-green-500" />
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="outline" className="capitalize">
                      {product.type}
                    </Badge>
                    <Button size="sm" variant="default" className="bg-fixnix-lightpurple">
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => page > 1 && setPage(page - 1)}
                    className={
                      page === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setPage(i + 1)}
                      isActive={page === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => page < totalPages && setPage(page + 1)}
                    className={
                      page === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </CardContent>
      </Card>
    </TabsContent>
  );
}

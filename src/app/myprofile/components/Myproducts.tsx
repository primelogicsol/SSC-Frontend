"use client";

import { useCallback, useEffect, useState } from "react";
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
import apiClient from "@/lib/apiClient";
import Link from "next/link";

type OrderItem = {
  orderId: number;
  orderStatus: string;
  paymentStatus: string;
  orderCreatedAt: string;
  item: {
    id: number;
    category: string;
    price: number;
    quantity: number;
    product: {
      id: number;
      title: string;
      price: number;
      images?: string[];
      coverImage?: string;
      url?: string;
      mp4Url?: string;
      mp3Url?: string;
    };
  };
};

export default function ProductsTab() {
  const [filter, setFilter] = useState<"all" | string>("all");
  const [products, setProducts] = useState<OrderItem[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 6;

  const fetchMyProducts = useCallback(async (filter?: string | null) => {
    try {
      setLoading(true);
      const url = filter
        ? `/user/purchases?category=${filter}`
        : `/user/purchases`;
      console.log(url);

      const res = await apiClient.get(url);
      const data = res.data;
      setProducts(data.data.orderItems || []);
    } catch (error) {
      setError(
        (error instanceof Error && error.message) || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMyProducts();
  }, [fetchMyProducts]);

  // Filter
  // const filtered =
  //   filter === "all"
  //     ? products
  //     : products.filter((p) => p.item.category === filter);

  // Pagination
  const totalPages = Math.ceil(products.length / perPage);
  const paginated = products.slice((page - 1) * perPage, page * perPage);

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
              onValueChange={(val) => {
                setPage(1);
                console.log(val);
                fetchMyProducts(val !== "all" ? val : null);
                setFilter(val);
              }}
            >
              <SelectTrigger className="w-40 focus-visible:ring-0 ring-fixnix-lightpurple">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {/* Dynamically render categories */}
                {[
                  "MUSIC",
                  "DIGITAL_BOOK",
                  "MEDITATION",
                  "FASHION",
                  "HOME_LIVING",
                  "DECORATION",
                  "ACCESSORIES",
                ].map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading && <p>Loading products...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Product Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((order) => {
              const product = order.item.product;
              return (
                <Card key={order.item.id} className="flex flex-col">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold line-clamp-1">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <img
                      src={
                        product.images
                          ? product.images?.[0]
                          : product.coverImage
                          ? product.coverImage
                          : "/assets/images/loader.png"
                      }
                      alt={product.title}
                      className="rounded-lg h-32 w-full object-cover mb-3"
                    />
                    <p className="text-sm text-muted-foreground">
                      Category: {order.item.category}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      Price: ${order.item.price}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="outline" className="capitalize">
                        {order.paymentStatus}
                      </Badge>
                      {product.url ? (
                        <a
                          href={product.url.replace(
                            "/upload/",
                            "/upload/fl_attachment:myproduct/"
                          )}
                          download="myproduct"
                        >
                          <Button
                            size="sm"
                            variant="default"
                            className="bg-fixnix-lightpurple"
                          >
                            Download
                          </Button>
                        </a>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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

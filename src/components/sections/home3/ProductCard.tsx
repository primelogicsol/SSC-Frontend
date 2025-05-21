import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  tags: string[];
  isWished: boolean;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // State to handle the "wish" toggle
  const [isWished, setIsWished] = useState(product.isWished);

  const handleWishlistToggle = () => {
    setIsWished(!isWished);
  };

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        {/* Image with Zoom Effect on Hover */}
        <div className="group relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <button
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`w-5 h-5 ${isWished ? "text-red-500 fill-red-500" : "text-gray-400"}`}
            />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center space-x-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-fixnix-darkpurple">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      
      <div className="mt-4 text-center">
        <Link href="/productdetails" className="px-4 py-2 bg-fixnix-lightpurple text-white rounded-lg hover:bg-fixnix-darkpurple transition-colors duration-300">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

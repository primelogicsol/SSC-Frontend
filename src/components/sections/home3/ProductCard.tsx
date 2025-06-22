import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  oldPrice: number | null;
  // rating: number;
  // tags: string[];
  isWish?: boolean;
};

// type ProductCardProps = {
//   product: Product;
// };

const ProductCard: React.FC<Product> = ({ id , title, image , description, price , oldPrice , isWish}) => {
  // State to handle the "wish" toggle
  const [isWished, setIsWished] = useState<any | null >(isWish);

  const handleWishlistToggle = () => {
    setIsWished(!isWished);
  };

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        {/* Image with Zoom Effect on Hover */}
        <div className="group relative overflow-hidden">
          {image && (
            <Image
            src={urlFor(image).url()}
            alt={title}
            width={300}
            height={300}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          )}
          
        
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center space-x-1 mb-2">
          {/* {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))} */}
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {price && (
           <span className="text-lg font-bold text-fixnix-darkpurple">
           ${price.toFixed(2)}
         </span>
          )}
          
          {oldPrice && (
            <span className="text-sm line-through text-gray-400">
              ${oldPrice.toFixed(2)}
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

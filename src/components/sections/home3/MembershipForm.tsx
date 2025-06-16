// // components/forms/MembershipForm.tsx
// "use client";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useState } from "react";

// interface MembershipFormData {
//   name: string;
//   email: string;
//   phone?: string;
//   location: string;
//   roles: string[];
//   volunteerAreas?: string[];
//   volunteerExperience?: string;
//   volunteerTime?: string;
//   volunteerMode?: string;
//   donorType?: string[];
//   anonymous?: boolean;
//   donorUpdates?: boolean;
//   collabType?: string[];
//   collabOrg?: string;
//   collabVision?: string;
//   additional?: string;
//   consent: boolean;
//   communication?: boolean;
// }

// export default function MembershipForm() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = useForm<MembershipFormData>({
//     defaultValues: {
//       roles: [],
//       anonymous: false,
//       communication: false,
//       consent: false,
//     },
//   });

//   const roles = watch("roles") || [];

//   const onSubmit: SubmitHandler<MembershipFormData> = (data) => {
//     console.log("Form Data:", data);
//     // Integrate with backend/email/API
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full bg-white p-4 border rounded-xl space-y-6"
//     >
//       <h1 className="text-2xl font-bold text-fixnix-darkpurple">Join the Sufi Science Center</h1>

//       <p className="text-sm font-semibold text-gray-600">
//         Become part of a soulful movement rooted in spirituality, wisdom, sacred art, and community healing.
//       </p>

//       {/* Personal Info */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-semibold text-fixnix-lightpurple">Full Name *</label>
//           <input {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })} className="mt-1 w-full border rounded-xl px-4 py-2" />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-fixnix-lightpurple">Email *</label>
//           <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} className="mt-1 w-full border rounded-xl px-4 py-2" />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//         </div>
//         <div>
//           <label className="block text-sm text-fixnix-lightpurple font-semibold">Phone</label>
//           <input {...register("phone")} className="mt-1 w-full border rounded-xl px-4 py-2" />
//         </div>
//         <div>
//           <label className="block text-sm text-fixnix-lightpurple font-semibold">Country *</label>
//           <input {...register("location", { required: "This field is required" })} className="mt-1 w-full border rounded-xl px-4 py-2" />
//           {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
//         </div>
//       </div>

//       {/* Roles */}
//       <div>
//         <label className="block text-sm font-semibold text-fixnix-lightpurple mb-2">Choose Your Membership Role *</label>
//         <div className="space-y-2 text-gray-700">
//           {["volunteer", "donor", "collaborator"].map((role) => (
//             <label key={role} className="flex items-center space-x-2">
//               <input type="checkbox" value={role} {...register("roles", { required: "Please select at least one role" })} />
//               <span className="capitalize">{role}</span>
//             </label>
//           ))}
//         </div>
//         {errors.roles && <p className="text-red-500 text-sm">{errors.roles.message}</p>}
//       </div>

//       {/* Conditional Sections */}
//       {roles.includes("volunteer") && (
//         <div className="space-y-4 text-gray-700 border-t pt-6">
//           <h3 className="text-lg font-semibold">Volunteer Details</h3>
//           <label className="block text-sm">Which areas would you like to support?</label>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//             {["Spiritual Programs", "Community Outreach", "Cultural Preservation", "Digital Media", "Craftsmanship"].map((item) => (
//               <label key={item} className="flex items-center space-x-2">
//                 <input type="checkbox" value={item} {...register("volunteerAreas")} />
//                 <span>{item}</span>
//               </label>
//             ))}
//           </div>
//           <input {...register("volunteerExperience")} placeholder="Previous volunteering experience" className="w-full border rounded-xl px-4 py-2" />
//           <input {...register("volunteerTime")} placeholder="Time you can offer monthly" className="w-full border rounded-xl px-4 py-2" />
//           <label className="block text-sm">Preferred mode of volunteering:</label>
//           <div className="flex space-x-4">
//             {["In-person", "Remote", "Hybrid"].map((mode) => (
//               <label key={mode} className="flex items-center space-x-2">
//                 <input type="radio" value={mode} {...register("volunteerMode")} />
//                 <span>{mode}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       )}

//       {roles.includes("donor") && (
//         <div className="space-y-4 text-gray-700 border-t pt-6">
//           <h3 className="text-lg font-semibold">Donor Preferences</h3>
//           <label className="block text-sm">Type of support:</label>
//           {["One-time", "Monthly", "Sponsor", "Tools/Materials"].map((item) => (
//             <label key={item} className="flex items-center space-x-2">
//               <input type="checkbox" value={item} {...register("donorType")} />
//               <span>{item}</span>
//             </label>
//           ))}
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" {...register("anonymous")} />
//             <span>Remain Anonymous</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" {...register("donorUpdates")} />
//             <span>Receive donation updates</span>
//           </label>
//         </div>
//       )}

//       {roles.includes("collaborator") && (
//         <div className="space-y-4 text-gray-700 border-t pt-6">
//           <h3 className="text-lg font-semibold">Collaborator Intent</h3>
//           <label className="block text-sm">Nature of collaboration:</label>
//           {["Institutional", "Cultural", "Interfaith Dialogue", "Program Co-creation"].map((item) => (
//             <label key={item} className="flex items-center space-x-2">
//               <input type="checkbox" value={item} {...register("collabType")} />
//               <span>{item}</span>
//             </label>
//           ))}
//           <input {...register("collabOrg")} placeholder="Organization (if applicable)" className="w-full border rounded-xl px-4 py-2" />
//           <input {...register("collabVision")} placeholder="What do you hope to co-create?" className="w-full border rounded-xl px-4 py-2" />
//         </div>
//       )}

//       {/* Additional */}
//       <div>
//         <label className="block text-sm font-semibold text-fixnix-lightpurple">Anything else you'd like to share?</label>
//         <textarea {...register("additional")} className="mt-1 w-full border rounded-xl px-4 py-2" rows={4} />
//       </div>

//       {/* Consent */}
//       <div className="space-y-2">
//         <label className="flex text-gray-700 items-center space-x-2">
//           <input type="checkbox" {...register("consent", { required: "You must agree to the Center's principles" })} />
//           <span>I agree to uphold the principles and values of the Sufi Science Center</span>
//         </label>
//         <label className="flex  text-gray-700 items-center space-x-2">
//           <input type="checkbox" {...register("communication")} />
//           <span>I consent to receiving updates and communications</span>
//         </label>
//         {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
//       </div>

//       {/* Submit Button */}
//       <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-fixnix-lightpurple text-white font-semibold rounded-xl hover:bg-fixnix-darkpurple">
//         {isSubmitting ? "Submitting..." : "Join the Circle"}
//       </button>

//       {isSubmitSuccessful && (
//         <p className="text-green-600 text-center">Thank you for joining the Sufi Science Center 💫</p>
//       )}
//     </form>
//   );
// }
// components/forms/MembershipForm.tsx
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState , useEffect } from "react";
import { client } from "@/sanity/lib/client";

interface MembershipFormData {
  name: string;
  email: string;
  phone?: string;
  location: string;
  roles: string[];
  volunteerAreas?: string[];
  volunteerExperience?: string;
  volunteerTime?: string;
  volunteerMode?: string;
  donorType?: string[];
  anonymous?: boolean;
  donorUpdates?: boolean;
  collabType?: string[];
  collabOrg?: string;
  collabVision?: string;
  additional?: string;
  consent: boolean;
  communication?: boolean;
}

export default function MembershipForm() {
  const [formData , setFormData] = useState<any>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<MembershipFormData>({
    defaultValues: {
      roles: [],
      anonymous: false,
      communication: false,
      consent: false,
    },
  });

  const roles = watch("roles") || [];

  const onSubmit: SubmitHandler<MembershipFormData> = (data) => {
    console.log("Form Data:", data);
    // Integrate with backend/email/API
  
  };
  const query = `
  *[_type == "page" && pageName == "membership"][0]{
    _id,
    pageName,
    "membershipFormData" : contentSections[type == "membershipForm"][0].membershipForm,
    
  }
`;

useEffect(() => {
  

  client.fetch(query)
    .then((data) => {
        setFormData(data.membershipFormData)
                  }
    )
    .catch((err) => console.error('Sanity Fetch Error:', err))
    
}, [])
console.log('form',formData)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white p-4 border rounded-xl space-y-6"
    >
      <h1 className="text-2xl font-bold text-fixnix-darkpurple">{formData?.heading}</h1>

      <p className="text-sm font-semibold text-gray-600">
        {formData?.subheading}
      </p>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-fixnix-lightpurple">Full Name *</label>
          <input {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })} className="mt-1 w-full border rounded-xl px-4 py-2" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-fixnix-lightpurple">Email *</label>
          <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} className="mt-1 w-full border rounded-xl px-4 py-2" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-fixnix-lightpurple font-semibold">Phone</label>
          <input {...register("phone")} className="mt-1 w-full border rounded-xl px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm text-fixnix-lightpurple font-semibold">Country *</label>
          <input {...register("location", { required: "This field is required" })} className="mt-1 w-full border rounded-xl px-4 py-2" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>
      </div>

      {/* Roles */}
      <div>
        <label className="block text-sm font-semibold text-fixnix-lightpurple mb-2">Choose Your Membership Role *</label>
        <div className="space-y-2 text-gray-700">
          {["volunteer", "donor", "collaborator"].map((role) => (
            <label key={role} className="flex items-center space-x-2">
              <input type="checkbox" value={role} {...register("roles", { required: "Please select at least one role" })} />
              <span className="capitalize">{role}</span>
            </label>
          ))}
        </div>
        {errors.roles && <p className="text-red-500 text-sm">{errors.roles.message}</p>}
      </div>

      {/* Conditional Sections */}
      {roles.includes("volunteer") && (
        <div className="space-y-4 text-gray-700 border-t pt-6">
          <h3 className="text-lg font-semibold">Volunteer Details</h3>
          <label className="block text-sm">Which areas would you like to support?</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Spiritual Programs", "Community Outreach", "Cultural Preservation", "Digital Media", "Craftsmanship"].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input type="checkbox" value={item} {...register("volunteerAreas")} />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <input {...register("volunteerExperience")} placeholder="Previous volunteering experience" className="w-full border rounded-xl px-4 py-2" />
          <input {...register("volunteerTime")} placeholder="Time you can offer monthly" className="w-full border rounded-xl px-4 py-2" />
          <label className="block text-sm">Preferred mode of volunteering:</label>
          <div className="flex space-x-4">
            {["In-person", "Remote", "Hybrid"].map((mode) => (
              <label key={mode} className="flex items-center space-x-2">
                <input type="radio" value={mode} {...register("volunteerMode")} />
                <span>{mode}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {roles.includes("donor") && (
        <div className="space-y-4 text-gray-700 border-t pt-6">
          <h3 className="text-lg font-semibold">Donor Preferences</h3>
          <label className="block text-sm">Type of support:</label>
          {["One-time", "Monthly", "Sponsor", "Tools/Materials"].map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input type="checkbox" value={item} {...register("donorType")} />
              <span>{item}</span>
            </label>
          ))}
          <label className="flex items-center space-x-2">
            <input type="checkbox" {...register("anonymous")} />
            <span>Remain Anonymous</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" {...register("donorUpdates")} />
            <span>Receive donation updates</span>
          </label>
        </div>
      )}

      {roles.includes("collaborator") && (
        <div className="space-y-4 text-gray-700 border-t pt-6">
          <h3 className="text-lg font-semibold">Collaborator Intent</h3>
          <label className="block text-sm">Nature of collaboration:</label>
          {["Institutional", "Cultural", "Interfaith Dialogue", "Program Co-creation"].map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input type="checkbox" value={item} {...register("collabType")} />
              <span>{item}</span>
            </label>
          ))}
          <input {...register("collabOrg")} placeholder="Organization (if applicable)" className="w-full border rounded-xl px-4 py-2" />
          <input {...register("collabVision")} placeholder="What do you hope to co-create?" className="w-full border rounded-xl px-4 py-2" />
        </div>
      )}

      {/* Additional */}
      <div>
        <label className="block text-sm font-semibold text-fixnix-lightpurple">Anything else you'd like to share?</label>
        <textarea {...register("additional")} className="mt-1 w-full border rounded-xl px-4 py-2" rows={4} />
      </div>

      {/* Consent */}
      <div className="space-y-2">
        <label className="flex text-gray-700 items-center space-x-2">
          <input type="checkbox" {...register("consent", { required: "You must agree to the Center's principles" })} />
          <span>I agree to uphold the principles and values of the Sufi Science Center</span>
        </label>
        <label className="flex  text-gray-700 items-center space-x-2">
          <input type="checkbox" {...register("communication")} />
          <span>I consent to receiving updates and communications</span>
        </label>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-fixnix-lightpurple text-white font-semibold rounded-xl hover:bg-fixnix-darkpurple">
        {isSubmitting ? "Submitting..." : "Join the Circle"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-600 text-center">Thank you for joining the Sufi Science Center 💫</p>
      )}
    </form>
  );
}

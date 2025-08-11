"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import {
  createMembership,
  updateMembership,
  deleteMembership,
} from "@/hooks/membershipServices";
import { useAuth } from "@/context/AuthContext";

interface MembershipFormData {
  phone: string;
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
  const { membership, setMembership } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MembershipFormData>({
    defaultValues: {
      roles: [],
      anonymous: false,
      communication: false,
      consent: false,
    },
  });

  const roles = watch("roles") || [];

  // ✅ Prefill form if membership exists
  useEffect(() => {
    if (membership) {
      setValue("phone", membership.phone);
      setValue("location", membership.country);
      setValue("roles", [membership.role]);
      setValue("volunteerAreas", membership.volunteerSupport || []);
      setValue("volunteerExperience", membership.previousVolunteerExp || "");
      setValue("volunteerTime", membership.monthlyTime || "");
      setValue("volunteerMode", membership.volunteerMode || "");
      setValue("donorType", membership.donorType || []);
      setValue("additional", membership.additionalInfo || "");
      setValue("collabType", membership.collabType || []);
      setValue("collabOrg", membership.organization || "");
      setValue("collabVision", membership.intentCreation || "");
    }
  }, [membership, setValue]);

  // ✅ Handle Submit (Create or Update)
  const onSubmit: SubmitHandler<MembershipFormData> = async (data) => {
    try {
    const payload = {
        phone: data.phone,
      country: data.location,
        agreedToPrinciples: data.consent,
        consentedToUpdates: !!data.communication,
        additionalInfo: data.additional,
      donorType: data.donorType || [],
      volunteerSupport: data.volunteerAreas || [],
        role: data.roles[0],
        previousVolunteerExp: data.volunteerExperience || "",
        monthlyTime: data.volunteerTime || "",
        volunteerMode: data.volunteerMode || "",
        organization: data.collabOrg || "",
        intentCreation: data.collabVision || "",
        collabType: data.collabType || [],
    };

      let response;
      if (membership) {
        response = await updateMembership(payload);
      } else {
        response = await createMembership(payload);
      }

      setMembership(response.data);
      alert("Membership saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving membership.");
    }
  };

  // ✅ Delete Membership
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your membership?")) {
    try {
      await deleteMembership();
        setMembership(null);
        alert("Membership deleted successfully!");
    } catch (err) {
      console.error(err);
        alert("Error deleting membership.");
      }
    }
  };

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-2xl space-y-6"
        >
          <h1 className="text-3xl font-bold text-fixnix-darkpurple text-center">
            {membership ? "Update Your Membership" : "Join the Sufi Science Center"}
          </h1>
          <p className="text-sm font-semibold text-gray-600 text-center mb-4">
            Become part of a soulful movement rooted in spirituality, wisdom, sacred art, and community healing.
          </p>

          {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
              <label className="block text-sm font-semibold text-fixnix-lightpurple">Phone *</label>
                  <input
                {...register("phone", { required: "Phone is required" })}
                    className="mt-1 w-full border rounded-xl px-4 py-2"
                  />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div>
              <label className="block text-sm font-semibold text-fixnix-lightpurple">Country *</label>
                  <input
                {...register("location", { required: "Country is required" })}
                    className="mt-1 w-full border rounded-xl px-4 py-2"
                  />
              {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                </div>
                </div>

          {/* Membership Roles */}
                <div>
            <label className="block text-sm font-semibold text-fixnix-lightpurple mb-2">Choose Your Membership Role *</label>
            <div className="space-y-2 text-gray-700">
              {["volunteer", "donor", "collaborator"].map((role) => (
                <label key={role} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={role}
                    {...register("roles", { required: "Select a role" })}
                  />
                  <span className="capitalize">{role}</span>
                </label>
              ))}
            </div>
            {errors.roles && <p className="text-red-500 text-sm">{errors.roles.message}</p>}
          </div>

          {/* Volunteer Section */}
          {roles.includes("volunteer") && (
            <div className="space-y-4 text-gray-700 border-t pt-6">
              <h3 className="text-lg font-semibold">Volunteer Details</h3>
              <label className="block text-sm">Areas of Support:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {["Spiritual Programs", "Community Outreach", "Cultural Preservation", "Digital Media", "Craftsmanship"].map((item) => (
                  <label key={item} className="flex items-center space-x-2">
                    <input type="checkbox" value={item} {...register("volunteerAreas")} />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
              <input
                {...register("volunteerExperience")}
                placeholder="Previous volunteering experience"
                className="w-full border rounded-xl px-4 py-2"
              />
              <input
                {...register("volunteerTime")}
                placeholder="Time you can offer monthly"
                className="w-full border rounded-xl px-4 py-2"
              />
              <label className="block text-sm">Preferred mode:</label>
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

          {/* Donor Section */}
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

          {/* Collaborator Section */}
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
              <input
                {...register("collabOrg")}
                placeholder="Organization (if applicable)"
                className="w-full border rounded-xl px-4 py-2"
              />
              <input
                {...register("collabVision")}
                placeholder="What do you hope to co-create?"
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>
          )}

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-semibold text-fixnix-lightpurple">Anything else you'd like to share?</label>
            <textarea {...register("additional")} className="mt-1 w-full border rounded-xl px-4 py-2" rows={4} />
          </div>

          {/* Consent */}
          <div className="space-y-2">
            <label className="flex text-gray-700 items-center space-x-2">
              <input
                type="checkbox"
                {...register("consent", { required: "You must agree to continue" })}
              />
              <span>I agree to the principles of the Sufi Science Center</span>
            </label>
            <label className="flex text-gray-700 items-center space-x-2">
              <input type="checkbox" {...register("communication")} />
              <span>I consent to receiving updates</span>
              </label>
            {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
          </div>

          {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-fixnix-lightpurple text-white font-semibold rounded-xl hover:bg-fixnix-darkpurple"
              >
            {membership ? "Update Membership" : "Join the Circle"}
              </button>

              {membership && (
                <button
                  type="button"
                  onClick={handleDelete}
              className="w-full py-3 bg-red-500 text-white font-semibold rounded-xl mt-4 hover:bg-red-700"
                >
                  Delete Membership
                </button>
          )}
        </form>
      </main>
    </Layout>
  );
}

import React from "react";

const Register = () => {
  return (
    <div
      className="
        max-w-md m-auto
        p-4 sm:p-6 md:p-7
        flex flex-col
        bg-gradient-to-bl from-[#E8DFFF] to-[#DDEBFF]
        rounded-md sm:rounded-lg
        shadow-lg
      "
    >
      <h1
        className="
          text-[22px] sm:text-[28px] md:text-4xl
          text-heading
          leading-tight
        "
      >
        Create Your free account
      </h1>

      <span
        className="
          text-xs sm:text-sm md:text-base
          leading-snug
          text-muted
          mt-2 sm:mt-3
        "
      >
        Connect with Yadxy:
      </span>

      <div className="my-4 sm:my-5">
        <button
          type="button"
          className="
            w-full
            inline-flex items-center justify-center
            py-2 sm:py-2.5
            px-3 sm:px-4
            mb-5 sm:mb-7
            rounded-md
            text-xs sm:text-sm md:text-base
            font-medium
            bg-gradient-to-bl from-[#E8DFFF]/30 to-[#DDEBFF]/30
            shadow-xl shadow-black/10
            border border-white/50
            group-hover:shadow-lg group-hover:scale-95
            transition-all
          "
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.72 1.22 9.21 3.6l6.85-6.85C35.69 2.62 30.24 0 24 0 14.64 0 6.48 5.74 2.56 14.06l7.98 6.19C12.27 13.37 17.65 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.14-3.08-.39-4.55H24v9.11h12.94c-.56 2.9-2.23 5.36-4.75 7.01l7.3 5.66c4.26-3.93 6.49-9.72 6.49-17.23z"
            />
            <path
              fill="#FBBC05"
              d="M10.54 28.25c-.48-1.43-.75-2.95-.75-4.5s.27-3.07.75-4.5l-7.98-6.19C.92 16.74 0 20.24 0 23.75s.92 7.01 2.56 10.19l7.98-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.91-2.13 15.88-5.78l-7.3-5.66c-2.05 1.38-4.69 2.19-8.58 2.19-6.35 0-11.73-3.87-13.46-9.25l-7.98 6.19C6.48 42.26 14.64 48 24 48z"
            />
          </svg>

          <span
            className="
              ml-2
              text-xs sm:text-sm md:text-base
              leading-snug
              text-muted
            "
          >
            Continue With Google
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="flex-1 border-t border-gray-300" />
          <div className="text-xs sm:text-sm md:text-base text-muted">
            Or continue with
          </div>
          <div className="flex-1 border-t border-gray-300" />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        <div>
          <label
            className="
              block
              text-xs sm:text-sm md:text-base
              leading-snug
              text-[#334155]
              mb-1
            "
          >
            Email <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            className="
              w-full
              px-3 sm:px-4
              py-2 sm:py-2.5
              text-sm sm:text-base
              border border-slate-300
              rounded-md
              focus:outline-none
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

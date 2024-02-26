import Hero from "@/src/components/hero/page";
import Container from "@/src/components/elements/container/page";

export default function Page() {
  return (
    <>
      <Hero title="Our Newsletter" />
      <Container>
        <div className="newsletter">
          <img
            className="img-head py-5"
            src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/LYJWgdK/LYJWgdK.mail.jpg"
            alt="subscribe to email"
          />
          <h1 className="uppercase font-bold lg:text-3xl sm:text-2xl text-xl py-4">
            subscribe
          </h1>
          <p className="description md:text-base text-sm">
            subscribe to our newsletter & stay updated
          </p>
          <div className="form-box flex items-center justify-center sm:flex-row flex-col mt-10 mx-5">
            <div className="input-main flex items-center  justify-center mr-4 px-3 md:py-4 sm:py-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full md:h-6 h-4 border-none"
              />
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

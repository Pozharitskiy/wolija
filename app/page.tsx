import Image from "next/image";

export default function CorporateServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-[120px] py-[18px] bg-white">
        {/* Logo */}
        <div className="flex items-center gap-[10px]">
          <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
              alt="Wolja Digital Logo"
              width={40}
              height={37}
              className="object-contain"
            />
          </div>
          <span className="text-[#2d3748] font-inter text-base font-normal">
            Wolja Digital
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex justify-center items-center gap-10">
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal">Home</span>
          </div>
          <div className="flex py-1 items-center gap-1 border-b-2 border-[#84cc16]">
            <span className="text-[#2d3748] text-sm font-normal">Services</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6004 7.45837L11.1671 12.8917C10.5254 13.5334 9.47539 13.5334 8.83372 12.8917L3.40039 7.45837" stroke="#2D3748" strokeWidth="0.833333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal">Team</span>
          </div>
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal">Blog</span>
          </div>
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal">Company</span>
          </div>
        </nav>

        {/* Search and Language */}
        <div className="hidden lg:flex items-center gap-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 22L20 20" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex items-center gap-1">
            <span className="text-[#2d3748] text-sm font-normal">Rus</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6004 7.45837L11.1671 12.8917C10.5254 13.5334 9.47539 13.5334 8.83372 12.8917L3.40039 7.45837" stroke="#2D3748" strokeWidth="0.833333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Hero Image */}
      <section className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bfefd954787690e3c77dee02f1a22fea654b8ad7?width=3840"
          alt="Business roles with various pawns"
          className="object-cover w-full h-full"
        />
      </section>

      {/* Breadcrumb */}
      <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-[120px] py-6">
        <span className="text-[#4a5568] font-manrope text-base">Home</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform rotate-180">
          <path d="M15 18L9 12L15 6" stroke="#4A5568" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[#4a5568] font-manrope text-base">Corporate structuring</span>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 sm:px-8 lg:px-[120px] py-8 lg:py-16">
        <div className="w-full max-w-[1000px] flex flex-col gap-6 mx-auto lg:mx-0 lg:ml-[460px]">
          {/* Main Title */}
          <h1 className="text-[32px] md:text-3xl lg:text-[54px] text-[#2d3748] font-poppins font-bold leading-[56px] text-center lg:text-left">
            CORPORATE & TAX STRUCTURING SERVICES
          </h1>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-2">
            {['Company Structuring','Crypto','Cyber','iGaming','Gamedev'].map((t)=> (
              <span key={t} className="inline-flex items-center px-4 py-2 rounded-[16px] border border-[var(--main)] text-[14px] text-[var(--gray-2)]">
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-[#4a5568] font-inter text-base leading-[19px] text-center lg:text-left mt-6">
            We help technology companies and start-ups establish optimal business structure and framework. We design and realise efficient company structure and special statuses that align with your business objectives whilst ensuring compliance depending on the type of commercial activity. We provide strategic guidance that supports your expansion plans and minimises regulatory risks.
          </p>

          {/* Services */}
          <div className="flex flex-col gap-6 mt-6">
            {/** Reusable service block **/}
            <section className="flex flex-col gap-3">
              <h2 className="text-[#2d3748] text-xl lg:text-2xl font-inter font-medium">Corporate and tax structuring (jurisdiction selection)</h2>
              <p className="text-[#4a5568] text-base leading-[19px]">We analyse your business model, revenue streams, and operational requirements to recommend the most suitable jurisdictions for your corporate structure. Our assessment considers factors including tax efficiency, regulatory environment, international treaties, and practical business considerations to create corporate structures that align with your key commercial objectives.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[#2d3748] text-xl lg:text-2xl font-inter font-medium">Company incorporation (30+ jurisdictions)</h2>
              <div className="text-[#4a5568] text-base leading-[19px]">
                <p className="mb-2">We facilitate company registration across more than 30 jurisdictions, including popular technology hubs in the EU, UK, USA, CIS, and other key markets.</p>
                <p className="mb-1 font-medium">Main locations:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>European Union: Poland, Estonia, Netherlands, Cyprus, Ireland, Malta</li>
                  <li>Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan</li>
                  <li>Serbia</li>
                  <li>United Kingdom</li>
                  <li>USA (Delaware)</li>
                  <li>UAE</li>
                  <li>Hongkong</li>
                </ul>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[#2d3748] text-xl lg:text-2xl font-inter font-medium">Bank account opening</h2>
              <p className="text-[#4a5568] text-base leading-[19px]">We assist with opening corporate bank accounts in your chosen jurisdictions.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[#2d3748] text-xl lg:text-2xl font-inter font-medium">Corporate governance documents. Share Purchase Agreements, Shareholders Agreements</h2>
              <p className="text-[#4a5568] text-base leading-[19px]">We design legal framework for your business relations with partners, investors, management and other stakeholders. We draft and negotiate investment documentation including share purchase agreements, shareholders' agreements, and related corporate governance documents. We ensure these agreements address sector-specific issues such as intellectual property rights, employee share schemes, and exit provisions.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[#2d3748] text-xl lg:text-2xl font-inter font-medium">SAFE and investment agreements</h2>
              <p className="text-[#4a5568] text-base leading-[19px]">We guide companies on formalising investment attraction activities. We prepare Simple Agreements for Future Equity (SAFE) and other investment instruments commonly used in start-up funding rounds.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-[#2d3748] text-xl lg:text-2xl font-inter font-medium">Special programmes and zones for IT companies and start-ups (IT-Park, Virtual zone)</h2>
              <p className="text-[#4a5568] text-base leading-[19px]">We guide companies through applications for special economic zones, IT parks, and government incentive programmes designed for technology businesses. These programmes often provide significant tax advantages, simplified regulatory procedures, and other benefits.</p>
            </section>

          </div>
        </div>
      </main>

      {/* Floating Social Media Buttons */}
      <div className="fixed right-4 lg:right-[30px] bottom-4 lg:bottom-[200px] flex flex-col gap-3 z-50">
        {/* WhatsApp */}
        <button className="w-[60px] h-[60px] rounded-full bg-[#00E510] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M17.7815 19.5C14.0428 19.5 11.001 16.2782 11 12.3195C11.001 11.316 11.7727 10.5 12.7185 10.5C12.8156 10.5 12.9118 10.5087 13.004 10.526C13.2066 10.5618 13.3991 10.6344 13.5761 10.7439C13.6017 10.7601 13.6191 10.7861 13.6232 10.8165L14.0183 13.4531C14.0233 13.4845 14.0142 13.5148 13.9947 13.5376C13.7767 13.7933 13.4983 13.9776 13.1882 14.0697L13.0388 14.1141L13.095 14.2669C13.6048 15.641 14.6426 16.7388 15.9414 17.2806L16.0856 17.3413L16.1277 17.1831C16.2146 16.8548 16.3886 16.5599 16.6302 16.3292C16.6475 16.3118 16.6711 16.3032 16.6947 16.3032C16.6997 16.3032 16.7049 16.3032 16.711 16.3042L19.2012 16.7225C19.2308 16.7279 19.2554 16.7453 19.2708 16.7723C19.3731 16.9599 19.4417 17.1647 19.4765 17.3793C19.4928 17.4746 19.5 17.5754 19.5 17.6805C19.5 18.6829 18.7293 19.4989 17.7815 19.5Z" fill="#FDFDFD"/>
          </svg>
        </button>

        {/* Telegram */}
        <button className="w-[60px] h-[60px] rounded-full bg-[#00B0F2] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M5.48605 14.3377C5.5285 14.3168 5.57105 14.297 5.6124 14.2784C6.33255 13.9516 7.0623 13.6457 7.79085 13.3397C7.83015 13.3397 7.896 13.295 7.93315 13.2804C7.98945 13.2565 8.04575 13.2335 8.10205 13.2096L8.426 13.0733C8.6427 12.9828 8.8583 12.8923 9.07495 12.8017C9.5073 12.6207 9.9395 12.4396 10.3718 12.2575C11.2364 11.8953 12.102 11.5322 12.9666 11.17C13.8311 10.8078 14.6968 10.4447 15.5614 10.0826C16.4259 9.7204 17.2916 9.35725 18.1561 8.9951C19.0207 8.633 19.8863 8.2698 20.7509 7.90765C20.9432 7.8265 21.1513 7.7058 21.3574 7.6704C21.5305 7.6402 21.6994 7.58195 21.8736 7.5497C22.2039 7.4883 22.5682 7.4633 22.8847 7.59755C22.994 7.6444 23.095 7.70995 23.1789 7.79215C23.5804 8.18135 23.524 8.8203 23.4391 9.36765C22.8475 13.1825 22.2559 17.0002 21.6633 20.8135C21.5825 21.3369 21.472 21.9113 21.0504 22.2422C20.6935 22.5222 20.1858 22.5534 19.745 22.4348C19.3043 22.3151 18.9155 22.0643 18.5342 21.8177C16.9527 20.7916 15.3702 19.7656 13.7887 18.7395C13.4127 18.496 12.9942 18.1776 12.9985 17.7353C13.0006 17.4689 13.1631 17.2317 13.3288 17.0204C14.7032 15.2638 16.6862 14.0567 18.1614 12.3813C18.3696 12.1451 18.5332 11.7184 18.2475 11.5821C18.0775 11.5009 17.882 11.6113 17.727 11.7164C15.777 13.0432 13.828 14.371 11.8779 15.6978C11.2417 16.1307 10.5747 16.5761 9.8079 16.6822C9.1217 16.7779 8.43135 16.5906 7.7675 16.3992C7.2109 16.2389 6.6555 16.0745 6.10205 15.9049C5.8079 15.8154 5.5041 15.7186 5.2768 15.5157C5.0495 15.3127 4.91888 14.9714 5.0559 14.7009C5.14195 14.5312 5.3087 14.424 5.4839 14.3366L5.48605 14.3377Z" fill="#FEFFFC"/>
          </svg>
        </button>

        {/* Support Button */}
        <button className="w-[60px] h-[60px] rounded-full bg-[#84cc16] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8.75 8.75L21.25 21.25M8.75 21.25L21.25 8.75" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-[rgba(0,0,0,0.15)] pt-10 pb-5 mt-8">
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-[240px] gap-8 lg:gap-16">
          {/* Logo Section */}
          <div className="flex items-center gap-[10px] w-full lg:w-[360px]">
            <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
              <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
              alt="Wolja Digital Logo"
              width={40}
              height={37}
              className="object-contain"
            />
            </div>
            <span className="text-[#2d3748] font-inter text-sm font-normal">
              Wolja Digital
            </span>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[360px]">
            <h3 className="text-[#2d3748] font-inter text-xl font-bold">Navigation</h3>
            <div className="flex flex-col gap-3">
              <span className="text-[#4a5568] font-inter text-base">Home</span>
              <span className="text-[#4a5568] font-inter text-base">Services</span>
              <span className="text-[#4a5568] font-inter text-base">Team</span>
              <span className="text-[#4a5568] font-inter text-base">Blog</span>
              <span className="text-[#4a5568] font-inter text-base">Company</span>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[360px]">
            <h3 className="text-[#2d3748] font-inter text-xl font-bold">Legal</h3>
            <div className="flex flex-col gap-3">
              <span className="text-[#4a5568] font-inter text-base">Privacy Policy</span>
              <span className="text-[#4a5568] font-inter text-base">Term of Use</span>
              <span className="text-[#4a5568] font-inter text-base">Cookie Policy</span>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[360px]">
            <h3 className="text-[#2d3748] font-inter text-xl font-bold">Social</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM9.0625 16.9738H6.6325V9.15375H9.0625V16.9738ZM7.8325 8.19375C7.065 8.19375 6.56875 7.65 6.56875 6.9775C6.56875 6.29125 7.08 5.76375 7.86375 5.76375C8.6475 5.76375 9.1275 6.29125 9.1425 6.9775C9.1425 7.65 8.6475 8.19375 7.8325 8.19375ZM17.9375 16.9738H15.5075V12.64C15.5075 11.6313 15.155 10.9462 14.2763 10.9462C13.605 10.9462 13.2063 11.41 13.03 11.8563C12.965 12.015 12.9488 12.24 12.9488 12.4638V16.9725H10.5175V11.6475C10.5175 10.6713 10.4862 9.855 10.4537 9.1525H12.565L12.6763 10.2388H12.725C13.045 9.72875 13.8288 8.97625 15.14 8.97625C16.7388 8.97625 17.9375 10.0475 17.9375 12.35V16.9738Z" fill="#4A5568"/>
                </svg>
                <span className="text-[#4a5568] font-inter text-base">Linkedin</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.944 0C8.77112 0.014807 5.73324 1.28562 3.4949 3.53446C1.25656 5.78329 -3.4549e-05 8.82708 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0L11.944 0ZM16.906 7.224C17.006 7.222 17.227 7.247 17.371 7.364C17.4672 7.44672 17.5283 7.5629 17.542 7.689C17.558 7.782 17.578 7.995 17.562 8.161C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.964C14.243 9.902 14.139 9.923 14.064 9.94C13.958 9.96467 12.271 11.0797 9.003 13.285C8.523 13.615 8.089 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.56567 12.32 4.86333 12.099 5.432 11.873C8.93 10.349 11.2627 9.34433 12.43 8.859C15.762 7.473 16.455 7.232 16.906 7.224Z" fill="#4A5568"/>
                </svg>
                <span className="text-[#4a5568] font-inter text-base">Telegram</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23.9991 12.0735C23.9991 5.40454 18.6261 -0.00146484 11.9991 -0.00146484C5.36909 3.51563e-05 -0.00390625 5.40454 -0.00390625 12.075C-0.00390625 18.1005 4.38509 23.0955 10.1211 24.0015V15.564H7.07609V12.075H10.1241V9.41253C10.1241 6.38704 11.9166 4.71603 14.6571 4.71603C15.9711 4.71603 17.3436 4.95154 17.3436 4.95154V7.92154H15.8301C14.3406 7.92154 13.8756 8.85303 13.8756 9.80853V12.0735H17.2026L16.6716 15.5625H13.8741V24C19.6101 23.094 23.9991 18.099 23.9991 12.0735Z" fill="#4A5568"/>
                </svg>
                <span className="text-[#4a5568] font-inter text-base">Facebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center border-t border-[rgba(0,0,0,0.15)] mt-10 pt-5 px-4 sm:px-8 lg:px-[120px]">
          <span className="text-[#2d3748] font-inter text-base text-center">
            © 2025 Wolja Digital - All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}

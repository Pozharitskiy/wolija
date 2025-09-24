import Image from "next/image";

export default function CorporateServices() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-[120px] py-[18px] bg-white">
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
          <span className="text-[#2d3748] font-inter text-base font-normal leading-[19px]">
            Wolja Digital
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex justify-center items-center gap-10">
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal leading-5">Home</span>
          </div>
          <div className="flex py-1 items-center gap-1 border-b-2 border-[#84cc16]">
            <span className="text-[#2d3748] text-sm font-normal leading-5">Services</span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M17.1004 7.45837L11.6671 12.8917C11.0254 13.5334 9.97539 13.5334 9.33372 12.8917L3.90039 7.45837" stroke="#2D3748" strokeWidth="0.833333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal leading-5">Team</span>
          </div>
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal leading-5">Blog</span>
          </div>
          <div className="flex py-1 items-center gap-3">
            <span className="text-[#2d3748] text-sm font-normal leading-5">Company</span>
          </div>
        </nav>

        {/* Search and Language */}
        <div className="flex items-center gap-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 22L20 20" stroke="#2D3748" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex items-center gap-1">
            <span className="text-[#2d3748] text-sm font-normal leading-5">Rus</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6004 7.45837L11.1671 12.8917C10.5254 13.5334 9.47539 13.5334 8.83372 12.8917L3.40039 7.45837" stroke="#2D3748" strokeWidth="0.833333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[500px] relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/bfefd954787690e3c77dee02f1a22fea654b8ad7?width=3840"
          alt="Business roles with various pawns"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Breadcrumb */}
      <div className="absolute left-[120px] top-[616px] flex items-center gap-3">
        <span className="text-[#4a5568] font-manrope text-base">Home</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform -rotate-90">
          <path d="M9 18L15 12L9 6" stroke="#4A5568" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[#4a5568] font-manrope text-base">Corporate structuring</span>
      </div>

      {/* Main Content */}
      <div className="absolute left-[460px] top-[680px] w-[1000px] flex flex-col gap-8">
        {/* Main Title */}
        <h1 className="text-[#2d3748] font-poppins text-[54px] font-semibold leading-[56px]">
          CORPORATE & TAX STRUCTURING SERVICES
        </h1>

        {/* Description */}
        <p className="text-[#4a5568] font-inter text-base leading-[19px]">
          We help technology companies and start-ups establish optimal business structure and framework. We design and realise efficient 
          company structure and special statuses, that align with your business objectives whilst ensuring compliance dependent from the 
          type of commercial activity. We provide strategic guidance that supports your expansion plans and minimises regulatory risks.
        </p>

        {/* Services */}
        <div className="flex flex-col gap-8">
          {/* Service 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px]">
              Corporate and tax structuring (jurisdiction selection)
            </h2>
            <p className="text-[#4a5568] font-inter text-base leading-[19px]">
              We analyse your business model, revenue streams, and operational requirements to recommend the most suitable jurisdictions for 
              your corporate structure. Our assessment considers factors including tax efficiency, regulatory environment, international treaties, 
              and practical business considerations to create corporate structures that aligns your key commercial objectives.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px]">
              Company incorporation (30+ jurisdictions)
            </h2>
            <div className="text-[#4a5568] font-inter text-base leading-[19px]">
              <p className="mb-2">
                We facilitate company registration across more than 30 jurisdictions, including popular technology hubs in the EU, UK, USA, CIS, and other key markets.
              </p>
              <p className="mb-1">Main locations:</p>
              <div className="space-y-1">
                <div>European Union: Poland, Estonia, Netherlands, Cyprus, Ireland, Malta</div>
                <div>Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan</div>
                <div>Serbia</div>
                <div>United Kingdom</div>
                <div>USA (Delaware)</div>
                <div>UAE</div>
                <div>Hongkong</div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px]">
              Bank account opening
            </h2>
            <p className="text-[#4a5568] font-inter text-base leading-[19px]">
              We assist with opening corporate bank accounts in your chosen jurisdictions.
            </p>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px]">
              Corporate governance documents. Share Purchase Agreements, Shareholders Agreements
            </h2>
            <p className="text-[#4a5568] font-inter text-base leading-[19px]">
              We design legal framework for your business relations with partners, investors, management and other stakeholders. We draft and 
              negotiate investment documentation including share purchase agreements, shareholders' agreements, and related corporate governance 
              documents. We ensure these agreements address sector-specific issues such as intellectual property rights, employee share schemes, 
              and exit provisions.
            </p>
          </div>

          {/* Service 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px]">
              SAFE and investment agreements
            </h2>
            <p className="text-[#4a5568] font-inter text-base leading-[19px]">
              We guide companies on formalising investment attraction activities. We prepare Simple Agreements for Future Equity (SAFE) and 
              other investment instruments commonly used in start-up funding rounds.
            </p>
          </div>

          {/* Service 6 */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px]">
              Special programmes and zones for IT companies and start-ups (IT-Park, Virtual zone)
            </h2>
            <p className="text-[#4a5568] font-inter text-base leading-[19px]">
              We guide companies through applications for special economic zones, IT parks, and government incentive programmes designed for 
              technology businesses. These programmes often provide significant tax advantages, simplified regulatory procedures, and other benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Social Media Buttons */}
      <div className="fixed right-[90px] top-[1606px] flex flex-col gap-3">
        {/* WhatsApp */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#00E510] flex items-center justify-center">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path d="M30.0683 0H29.9317C13.4009 0 0 13.4009 0 29.9317V30.0683C0 46.5991 13.4009 60 29.9317 60H30.0683C46.5991 60 60 46.5991 60 30.0683V29.9317C60 13.4009 46.5991 0 30.0683 0Z" fill="#00E510"/>
            <path d="M35.5631 39C28.0856 39 22.002 32.5564 22 24.639C22.002 22.632 23.5455 21 25.4369 21C25.6313 21 25.8237 21.0173 26.0079 21.052C26.4132 21.1235 26.7981 21.2688 27.1522 21.4877C27.2034 21.5202 27.2382 21.5722 27.2464 21.6329L28.0365 26.9061C28.0467 26.9689 28.0283 27.0296 27.9894 27.0751C27.5534 27.5866 26.9966 27.9551 26.3764 28.1393L26.0776 28.2282L26.1901 28.5338C27.2095 31.282 29.2851 33.4775 31.8827 34.5612L32.1713 34.6826L32.2553 34.3662C32.4292 33.7095 32.7772 33.1199 33.2603 32.6583C33.2951 32.6236 33.3422 32.6063 33.3893 32.6063C33.3995 32.6063 33.4098 32.6063 33.422 32.6084L38.4023 33.445C38.4616 33.4559 38.5108 33.4905 38.5415 33.5447C38.7462 33.9197 38.8833 34.3293 38.9529 34.7585C38.9857 34.9492 39 35.1508 39 35.361C39 37.3658 37.4586 38.9978 35.5631 39Z" fill="#FDFDFD"/>
          </svg>
        </div>

        {/* Telegram */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#00B0F2] flex items-center justify-center">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path d="M30.0683 0H29.9317C13.4009 0 0 13.4009 0 29.9317V30.0683C0 46.5991 13.4009 60 29.9317 60H30.0683C46.5991 60 60 46.5991 60 30.0683V29.9317C60 13.4009 46.5991 0 30.0683 0Z" fill="#00B0F2"/>
            <path d="M10.9721 28.6753C11.057 28.6337 11.1421 28.5941 11.2249 28.5567C12.6651 27.9032 14.1245 27.2913 15.5817 26.6794C15.6603 26.6794 15.792 26.5899 15.8663 26.5608C15.9789 26.5129 16.0915 26.4671 16.2041 26.4192L16.852 26.1466C17.2854 25.9655 17.7166 25.7845 18.1499 25.6034C19.0145 25.2413 19.879 24.8791 20.7436 24.5149C22.4727 23.7906 24.204 23.0643 25.9332 22.34C27.6623 21.6157 29.3935 20.8894 31.1227 20.1651C32.8518 19.4408 34.5831 18.7145 36.3122 17.9902C38.0413 17.2659 39.7726 16.5396 41.5018 15.8153C41.8863 15.653 42.3026 15.4116 42.7147 15.3408C43.061 15.2804 43.3987 15.1639 43.7471 15.0994C44.4077 14.9766 45.1363 14.9266 45.7693 15.1951C45.9881 15.2888 46.1899 15.4199 46.3578 15.5843C47.1607 16.3627 47.0481 17.6406 46.8782 18.7353C45.695 26.3651 44.5118 33.9971 43.3265 41.6269C43.165 42.6738 42.9441 43.8226 42.1008 44.4844C41.387 45.0443 40.3716 45.1067 39.4901 44.8695C38.6085 44.6301 37.831 44.1285 37.0684 43.6353C33.9054 41.5832 30.7403 39.5311 27.5773 37.479C26.8253 36.992 25.9884 36.3551 25.9969 35.4706C26.0012 34.9378 26.3261 34.4633 26.6575 34.0408C29.4063 30.5276 33.3723 28.1134 36.3228 24.7626C36.7392 24.2901 37.0663 23.4368 36.4949 23.1642C36.155 23.0018 35.7641 23.2225 35.454 23.4327C31.5539 26.0863 27.6559 28.7419 23.7558 31.3955C22.4834 32.2613 21.1494 33.1521 19.6157 33.3644C18.2434 33.5558 16.8627 33.1812 15.535 32.7983C14.4219 32.4777 13.3109 32.1489 12.2041 31.8097C11.6157 31.6307 11.0082 31.4371 10.5536 31.0313C10.099 30.6254 9.83777 29.9428 10.1118 29.4017C10.2839 29.0624 10.6174 28.8481 10.9679 28.6732L10.9721 28.6753Z" fill="#FEFFFC"/>
          </svg>
        </div>

        {/* Support Button */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#84cc16] flex items-center justify-center">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M8.75 8.75L21.25 21.25M8.75 21.25L21.25 8.75" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute top-[1840px] w-full border-t border-[rgba(0,0,0,0.15)] pt-10">
        <div className="flex px-[240px] gap-0">
          {/* Logo Section */}
          <div className="flex items-center gap-[10px] w-[360px]">
            <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
                alt="Wolja Digital Logo"
                width={40}
                height={37}
                className="object-contain"
              />
            </div>
            <span className="text-[#2d3748] font-inter text-sm font-normal leading-5">
              Wolja Digital
            </span>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col gap-4 w-[360px]">
            <h3 className="text-[#2d3748] font-inter text-xl font-semibold leading-6">Navigation</h3>
            <div className="flex flex-col gap-3">
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Home</span>
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Services</span>
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Team</span>
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Blog</span>
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Company</span>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col gap-4 w-[360px]">
            <h3 className="text-[#2d3748] font-inter text-xl font-semibold leading-6">Legal</h3>
            <div className="flex flex-col gap-3">
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Privacy Policy</span>
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Term of Use</span>
              <span className="text-[#4a5568] font-inter text-base leading-[19px]">Cookie Policy</span>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col gap-4 w-[360px]">
            <h3 className="text-[#2d3748] font-inter text-xl font-semibold leading-6">Social</h3>
            <div className="flex flex-col gap-3 w-[106px]">
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5777)">
                    <path d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM9.0625 16.9738H6.6325V9.15375H9.0625V16.9738ZM7.8325 8.19375C7.065 8.19375 6.56875 7.65 6.56875 6.9775C6.56875 6.29125 7.08 5.76375 7.86375 5.76375C8.6475 5.76375 9.1275 6.29125 9.1425 6.9775C9.1425 7.65 8.6475 8.19375 7.8325 8.19375ZM17.9375 16.9738H15.5075V12.64C15.5075 11.6313 15.155 10.9462 14.2763 10.9462C13.605 10.9462 13.2063 11.41 13.03 11.8563C12.965 12.015 12.9488 12.24 12.9488 12.4638V16.9725H10.5175V11.6475C10.5175 10.6713 10.4862 9.855 10.4537 9.1525H12.565L12.6763 10.2388H12.725C13.045 9.72875 13.8288 8.97625 15.14 8.97625C16.7388 8.97625 17.9375 10.0475 17.9375 12.35V16.9738Z" fill="#4A5568"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5777">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-base leading-[19px]">Linkedin</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5781)">
                    <path d="M11.944 0C8.77112 0.014807 5.73324 1.28562 3.4949 3.53446C1.25656 5.78329 -3.4549e-05 8.82708 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0L11.944 0ZM16.906 7.224C17.006 7.222 17.227 7.247 17.371 7.364C17.4672 7.44672 17.5283 7.5629 17.542 7.689C17.558 7.782 17.578 7.995 17.562 8.161C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.964C14.243 9.902 14.139 9.923 14.064 9.94C13.958 9.96467 12.271 11.0797 9.003 13.285C8.523 13.615 8.089 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.56567 12.32 4.86333 12.099 5.432 11.873C8.93 10.349 11.2627 9.34433 12.43 8.859C15.762 7.473 16.455 7.232 16.906 7.224Z" fill="#4A5568"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5781">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-base leading-[19px]">Telegram</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5785)">
                    <path d="M23.9991 12.0735C23.9991 5.40454 18.6261 -0.00146484 11.9991 -0.00146484C5.36909 3.51563e-05 -0.00390625 5.40454 -0.00390625 12.075C-0.00390625 18.1005 4.38509 23.0955 10.1211 24.0015V15.564H7.07609V12.075H10.1241V9.41253C10.1241 6.38704 11.9166 4.71603 14.6571 4.71603C15.9711 4.71603 17.3436 4.95154 17.3436 4.95154V7.92154H15.8301C14.3406 7.92154 13.8756 8.85303 13.8756 9.80853V12.0735H17.2026L16.6716 15.5625H13.8741V24C19.6101 23.094 23.9991 18.099 23.9991 12.0735Z" fill="#4A5568"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5785">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-base leading-[19px]">Facebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center border-t border-[rgba(0,0,0,0.15)] mt-10 pt-5 px-[120px]">
          <span className="text-[#2d3748] font-inter text-base leading-[19px]">
            © 2025 Wolja Digital - All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}

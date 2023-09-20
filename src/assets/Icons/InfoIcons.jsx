const InfoIcons = {
    info: (
        <svg
        viewBox="0 0 460 1000"
        fill="currentColor"
        height="2em"
        width="2em"
        
      >
        <path d="M352 0c32 0 56.667 9 74 27s26 41 26 69c0 33.333-13 62.667-39 88s-57.667 38-95 38c-32 0-56.667-8.667-74-26s-25.333-41.333-24-72c0-30.667 11.667-59 35-85s55.667-39 97-39M146 1000c-66.667 0-84.667-59.333-54-178l60-254c9.333-37.333 9.333-56 0-56-8 0-26 6-54 18s-52 24.667-72 38L0 524c60-52 123-94 189-126s116.333-48 151-48c52 0 64 54 36 162l-70 266c-10.667 42.667-8.667 64 6 64 29.333 0 68.667-20 118-60l30 40c-56 57.333-114.333 101.333-175 132s-107 46-139 46" />
      </svg>
    ),
    react: (
        <svg
        viewBox="0 0 34 32"
        fill="currentColor"
        height="3em"
        width="3em"
        className="text-blue-400"
      >
        <path
          fill="currentColor"
          d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
        />
        <path
          fill="currentColor"
          d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
        />
      </svg>
    ),
    tailwind: (
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="3em"
        width="3em"
        className="text-blue-500"
      >
        <path d="M18.5 9.51a4.22 4.22 0 01-1.91-1.34A5.77 5.77 0 0012 6a4.72 4.72 0 00-5 4 3.23 3.23 0 013.5-1.49 4.32 4.32 0 011.91 1.35A5.77 5.77 0 0017 12a4.72 4.72 0 005-4 3.2 3.2 0 01-3.5 1.51zm-13 4.98a4.22 4.22 0 011.91 1.34A5.77 5.77 0 0012 18a4.72 4.72 0 005-4 3.23 3.23 0 01-3.5 1.49 4.32 4.32 0 01-1.91-1.35A5.8 5.8 0 007 12a4.72 4.72 0 00-5 4 3.2 3.2 0 013.5-1.51z" />
      </svg>
    ),
    nodejs: (
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="3em"
        width="3em"
        className="text-green-500"

      >
        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
      </svg>
    ),
    postgesql:(
        <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="3em"
        width="3em"
       className="text-sky-600"
      >
        <path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 00.26-3.74.86.86 0 00-.66-.74 3.12 3.12 0 00-2.08.61v.18a11.34 11.34 0 01-.06 2.41 2.37 2.37 0 00.62 2 2 2 0 001.43.63 8.05 8.05 0 01.3-.81zM10 8.58a.36.36 0 01-.09-.23.19.19 0 01.09-.12.74.74 0 01.48-.07c.25 0 .5.16.48.34a.51.51 0 01-.49.33h-.06a.63.63 0 01-.41-.25z" />
        <path d="M7.88 11a12.58 12.58 0 00.06-2.3v-.28a7 7 0 011.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 001 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 017.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 00-.29.35c-.35.43-.5.58-1.51.79a2 2 0 00-.4.11 1 1 0 00.37.16 2.21 2.21 0 002.5-.8.41.41 0 000-.35.59.59 0 00-.25-.37zm6.29-5.82a5.29 5.29 0 00.08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 01.26.48 1.79 1.79 0 00.15.31 3.72 3.72 0 00.16-2.13 7.51 7.51 0 01-.07-1.05 6 6 0 01.14-.93zm-.56-.16a.6.6 0 01-.32.17h-.06a.47.47 0 01-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 01-.12.26z" />
        <path d="M17 4.88a6.06 6.06 0 011.37 2.57.71.71 0 010 .15 5.67 5.67 0 01-.09 1.06 7.11 7.11 0 00-.09.86 6.61 6.61 0 00.07 1 4 4 0 01-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 00-3.81-1.8 7.34 7.34 0 00-1.63.16A6.17 6.17 0 0117 4.88z" />
        <path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 01-1 .13 19.74 19.74 0 002.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0016.37 2a8.44 8.44 0 00-2.46.35 9.38 9.38 0 00-1.45-.14 4.8 4.8 0 00-2.46.62 12.22 12.22 0 00-1.77-.44A5.44 5.44 0 004 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 001 4.67A15.76 15.76 0 004.4 15a3.39 3.39 0 001.75 1.83 1.71 1.71 0 001.69-.37 2 2 0 001 .59 3.65 3.65 0 002.35-.14v.81a8.46 8.46 0 00.31 2.36 1 1 0 010 .13 3 3 0 00.71 1.24 2.08 2.08 0 001.49.56 3 3 0 00.7-.08 3.27 3.27 0 002.21-1.27 7.34 7.34 0 00.91-4v-.26h.17a5.24 5.24 0 002.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 01-1.8.34 2.62 2.62 0 01-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 01-2.25 2.3 3.23 3.23 0 01-.66.07A2 2 0 0112 20a16.77 16.77 0 01-.28-4.06 2.56 2.56 0 01-1.78.66 3.94 3.94 0 01-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 01.19-.24 2.56 2.56 0 01-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 01-1.11.63 1.23 1.23 0 01-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 01-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 012.41-.66 5.58 5.58 0 011.4.18 7.51 7.51 0 012.5-.4 5.35 5.35 0 014.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 01-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z" />
        <path d="M17.43 13.59a4 4 0 01-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 012.12-.61 6.28 6.28 0 00-1.13-1.94 5.41 5.41 0 00-4.13-2 3.34 3.34 0 00-2.55.95A5.82 5.82 0 008.51 7.8l.15-.08A3.7 3.7 0 0110 7.3a1.45 1.45 0 011.76 1.19 5.73 5.73 0 01-.29 4.09 3.29 3.29 0 00-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 01.57.07 1.16 1.16 0 01.62.74v.16a.28.28 0 010 .09 22.22 22.22 0 00.22 4.9 1.5 1.5 0 002 1.09A1.92 1.92 0 0016.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z" />
        <path d="M18 14.33l-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 00.93.12 4.29 4.29 0 001.38-.29 3 3 0 00.79-.52 3.47 3.47 0 01-2.43-.05z" />
      </svg>
    ),
    close:(
        <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="2em"
        width="2em"
       
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
      </svg>
    )
  };
  
  export default InfoIcons;
  
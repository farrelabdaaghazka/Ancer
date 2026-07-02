export const apiClient = {
  get: async (url, options = {}) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || "https://api.ancer.com"}${url}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Gagal ambil data: ${response.status} ${response.statusText}\n` +
          `Pesan: ${errorData.message || "Cek koneksi atau alamat API"}`,
      );
    }
    return await response.json();
  },

  post: async (url, body, options = {}) => {
    if (url === "/login") {
      const { email, password } = body || {};
      
      if (email === "farrelabdaaghazka@gmail.com" && password === "12345") {
        return {
          success: true,
          user: {
            name: "Farrel Abda Aghazka",
            nickname: "Abda",
            email: "farrelabdaaghazka@gmail.com",
            phone: "+62 812-3456-7890",
            address: "Kota Tangerang Selatan, Banten",
            role: "User",
          },
        };
      }
      
      throw new Error(
        "Email atau password salah. Silakan coba lagi atau gunakan akun yang valid.",
      );
    }

    if (url === "/register") {
      const { name, email, password } = body || {};
      
      if (!name || !email || !password) {
        throw new Error("Semua data pendaftaran wajib diisi!");
      }
      
      return {
        success: true,
        message: "Registrasi berhasil!",
        user: { name, email },
      };
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL || "https://api.ancer.com"}${url}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        body: JSON.stringify(body),
        ...options,
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Gagal kirim data: ${response.status} ${response.statusText}\n` +
          `Pesan: ${errorData.message || "Cek koneksi atau data yang dikirim"}`,
      );
    }
    return await response.json();
  },
};
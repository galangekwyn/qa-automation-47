const baseUrl = "https://kasir-api.belajarqa.com";

// Testcase: Logout Berhasil
async function testLogoutSuccess() {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      method: "POST",
      headers: {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwYTczZGY1LWNkYTMtNDE3My1hZTczLTlhMTNhYjRhYzliOCIsImNvbXBhbnlJZCI6ImQ0MTE2MmM4LWRhMDctNDY4NC04M2NhLWE0ZTk2NDYyOWU5MCIsImlhdCI6MTY5MTg0OTk4OH0.ROFB7Ul6gxirMdMUNHz_c0e2CGapwZxBuko5GrUQOWk"
      }
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log("Logout Berhasil");
      console.log(responseData);
    } else {
      console.error("Logout Gagal");
      console.error(responseData);
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

// Testcase: Logout Gagal
async function testLogoutFailure() {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      method: "POST",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwYTczZGY1LWNkYTMtNDE3My1hZTczLTlhMTNhYjRhYzliOCIsImNvbXBhbnlJZCI6ImQ0MTE2MmM4LWRhMDctNDY4NC04M2NhLWE0ZTk2NDYyOWU5MCIsImlhdCI6MTY5MTg0OTk4OH0.VrtQmsV7suTK6NOJx0O0TUxSuMh_YDZ1dTZE2RozmkA"
      }
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log("Logout Gagal seperti yang diharapkan");
      console.log(responseData);
    } else {
      console.error("Logout Berhasil, seharusnya gagal");
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

// Menjalankan testcase
testLogoutSuccess();
testLogoutFailure();
function turkish() {
	// Weight factors
	const weights = {
		Planar_Gama_Kamera: 0.02,
		Spect_Sistem: 0.06,
		Spect_BT_veya_PET_BT_Sistemleri: 0.1,
		PET_MR: 0.1,
		Siklotron: 0.5,
		Diger_Ekipmanlar: 0.005,
		Sabit_Radyografi_Unitesi: 0.01,
		Mamografi_Unitesi: 0.02,
		Biyopsi_Analizi_Numune_dolabi_uniteleri: 0.001,
		Floroskopi_Unitesi: 0.01,
		Girisimsal_Floroskopi_Unitesi: 0.02,
		Tasinabilir_Mobil_Radyografi_Unitesi: 0.004,
		Agiz_ici_dental_X_isin_Unitesi: 0.001,
		Bilgisayarli_radyografi_dedektorleri: 0.001,
		Tanisal_Radyoloji_dedektorleri: 0.004,
		Goruntu_Goruntuleme_cihazi: 0.001,
		Manyetik_Razonans_tarayici: 0.04,
		Ultrason_Unitesi: 0.002,
		Okuma_Yazdirma_Cihazlari: 0.002,
		Karanlik_odalar_islama_islemciler: 0.02,
		Nukleer_Tip_Goruntuleme: 0.02,
		Nukleer_Tip_Ayakta_Tedavi: 0.05,
		Nukleer_Tip_Yatarak_Tedavi: 0.001,
		Nukleer_Tip_Kompleks_Tedavi: 0.005,
		Hamile_Emziren_Hasta_Risk_Degerlendirme: 0.002,
		BT_Prosedurleri: 0.01,
		Girisimsal_Radyoloji_Kardiyoloji_Prosedurleri: 0.02,
		Planar_Prosedurler: 0.001,
		Yuksek_Doz_Prosedurleri: 0.002,
		Hamile_Hasta_Risk_Degerlendirme: 0.002,
		Tanisal_Radyoloji_Bolumu: 0.05,
		Girisimsal_Radyoloji_Bolumu: 0.05,
		Nukleer_Tip_Bolumu: 0.2,
		Siklotron_Bolumu: 0.1,
		Nukleer_Tip_Tedavi_Kogusu: 0.1,
		Manyetik_Rezonans_Guvenligi: 0.01,
		Personel_Dozimetri_Inceleme: 0.01,
		Karmasik_Personel_Maruziyet_Degerlendirme: 0.005,
		Personel_Risk_Degerlendirme: 0.001,
		Departman_Yonetimi: 0.2,
		Doz_Yonetimi_Programi: 0.04,
		Klinik_Denetim: 0.1,
		Ekipman_Spesifikasyon: 0.02,
		Ekipman_Kabul_Testi: 0.02,
		Sabit_Kurulum_Radyasyon_Korunma: 0.02,
		Test_Protokolu_Gelistirme: 0.05,
		CPD_Birimleri: 0.02,
		Egitim_Verme: 0.002,
		Egitim_Verme_Asistan: 0.1,
	};

	// Create GUI
	const container = document.createElement("div");
	container.style.width = "800px";
	container.style.margin = "20px auto";
	container.style.padding = "20px";
	container.style.border = "1px solid #ddd";

	// Title
	const title = document.createElement("h2");
	title.textContent = "Medikal Fizikçi Hesaplama";
	container.appendChild(title);

	// Input fields for each weight factor
	const inputFields = {};
	Object.keys(weights).forEach((key) => {
		const fieldContainer = document.createElement("div");
		fieldContainer.style.marginBottom = "10px";

		const label = document.createElement("label");
		label.textContent = `${key} adedi: `;
		fieldContainer.appendChild(label);

		const input = document.createElement("input");
		input.type = "number";
		input.min = "0";
		input.style.marginLeft = "10px";
		inputFields[key] = input;
		fieldContainer.appendChild(input);

		container.appendChild(fieldContainer);
	});

	// Calculate button
	const button = document.createElement("button");
	button.textContent = "Hesapla";
	button.onclick = calculate;
	container.appendChild(button);

	// Result display
	const resultDisplay = document.createElement("div");
	resultDisplay.style.marginTop = "20px";
	container.appendChild(resultDisplay);

	// Append container to body
	document.body.appendChild(container);

	// Calculate function
	function calculate() {
		let totalScore = 0;
		Object.keys(weights).forEach((key) => {
			const value = parseFloat(inputFields[key].value) || 0;
			totalScore += weights[key] * value;
		});
		resultDisplay.textContent = `Gerekli Medikal Fizikçi: ${totalScore.toFixed(
			2
		)}`;
	}
}

// Call the function to create the app
turkish();

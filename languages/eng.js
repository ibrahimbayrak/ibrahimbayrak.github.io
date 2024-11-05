function english() {
	const weights = [
		{ label: "Planar Gamma Camera", value: 0.02 },
		{ label: "Spect System", value: 0.06 },
		{ label: "Spect CT or PET CT Systems", value: 0.1 },
		{ label: "PET MR", value: 0.1 },
		{ label: "Cyclotron", value: 0.5 },
		{ label: "Other Equipment", value: 0.005 },
		{ label: "Fixed Radiography Unit", value: 0.01 },
		{ label: "Mammography Unit", value: 0.02 },
		{ label: "Biopsy Analysis Sample Cabinet Units", value: 0.001 },
		{ label: "Fluoroscopy Unit", value: 0.01 },
		{ label: "Interventional Fluoroscopy Unit", value: 0.02 },
		{ label: "Portable Mobile Radiography Unit", value: 0.004 },
		{ label: "Intraoral Dental X Ray Unit", value: 0.001 },
		{ label: "Computerized Radiography Detectors", value: 0.001 },
		{ label: "Diagnostic Radiology Detectors", value: 0.004 },
		{ label: "Imaging Device", value: 0.001 },
		{ label: "Magnetic Resonance Scanner", value: 0.04 },
		{ label: "Ultrasound Unit", value: 0.002 },
		{ label: "Reading Printing Devices", value: 0.002 },
		{ label: "Darkrooms Development Processors", value: 0.02 },
		{ label: "Nuclear Medicine Imaging", value: 0.02 },
		{ label: "Nuclear Medicine Outpatient Treatment", value: 0.05 },
		{ label: "Nuclear Medicine Inpatient Treatment", value: 0.001 },
		{ label: "Nuclear Medicine Complex Treatment", value: 0.005 },
		{ label: "Pregnant Nursing Patient Risk Assessment", value: 0.002 },
		{ label: "CT Procedures", value: 0.01 },
		{
			label: "Interventional Radiology Cardiology Procedures",
			value: 0.02,
		},
		{ label: "Planar Procedures", value: 0.001 },
		{ label: "High Dose Procedures", value: 0.002 },
		{ label: "Pregnant Patient Risk Assessment", value: 0.002 },
		{ label: "Diagnostic Radiology Department", value: 0.05 },
		{ label: "Interventional Radiology Department", value: 0.05 },
		{ label: "Nuclear Medicine Department", value: 0.2 },
		{ label: "Cyclotron Department", value: 0.1 },
		{ label: "Nuclear Medicine Treatment Ward", value: 0.1 },
		{ label: "Magnetic Resonance Safety", value: 0.01 },
		{ label: "Staff Dosimetry Review", value: 0.01 },
		{ label: "Complex Staff Exposure Assessment", value: 0.005 },
		{ label: "Staff Risk Assessment", value: 0.001 },
		{ label: "Department Management", value: 0.2 },
		{ label: "Dose Management Program", value: 0.04 },
		{ label: "Clinical Supervision", value: 0.1 },
		{ label: "Equipment Specification", value: 0.02 },
		{ label: "Equipment Acceptance Test", value: 0.02 },
		{ label: "Fixed Installation Radiation Protection", value: 0.02 },
		{ label: "Test Protocol Development", value: 0.05 },
		{ label: "CPD Units", value: 0.02 },
		{ label: "Teaching", value: 0.002 },
		{ label: "Teaching Assistant", value: 0.1 },
	];

	const container = document.createElement("div");
	container.style.width = "800px";
	container.style.margin = "20px auto";
	container.style.padding = "20px";
	container.style.border = "1px solid #ddd";

	const title = document.createElement("h2");
	title.textContent = "Medical Physicist Calculation";
	container.appendChild(title);

	const inputFields = {};
	weights.forEach((item) => {
		const fieldContainer = document.createElement("div");
		fieldContainer.style.marginBottom = "10px";

		const label = document.createElement("label");
		label.textContent = `${item.label} quantity: `;
		fieldContainer.appendChild(label);

		const input = document.createElement("input");
		input.type = "number";
		input.min = "0";
		input.style.marginLeft = "10px";

		inputFields[item.label] = input;
		fieldContainer.appendChild(input);
		container.appendChild(fieldContainer);
	});

	const button = document.createElement("button");
	button.textContent = "Calculate";
	button.onclick = calculate;
	container.appendChild(button);

	const resultDisplay = document.createElement("div");
	resultDisplay.style.marginTop = "20px";
	container.appendChild(resultDisplay);

	document.body.appendChild(container);

	function calculate() {
		let totalScore = 0;
		weights.forEach((item) => {
			const value = parseFloat(inputFields[item.label].value) || 0;
			totalScore += item.value * value;
		});
		resultDisplay.textContent = `Required Medical Physicist: ${totalScore.toFixed(
			2
		)}`;
	}
}

english();

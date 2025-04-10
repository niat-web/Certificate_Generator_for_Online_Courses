/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        darkModeToggle.textContent = body.dataset.theme === 'dark' ? ' Light Mode' : ' Dark Mode';
    });

    // Certificate Form
    const certificateForm = document.getElementById('certificateForm');
    const courseNameInput = document.getElementById('courseName');
    const studentNameInput = document.getElementById('studentName');
    const completionDateInput = document.getElementById('completionDate');
    const instructorNameInput = document.getElementById('instructorName');
    const signatureLogoInput = document.getElementById('signatureLogo');
    const certificateContainer = document.getElementById('certificateContainer');

    // Design Options
    const fontStyleSelect = document.getElementById('fontStyle');
    const fontSizeInput = document.getElementById('fontSize');
    const colorPicker = document.getElementById('colorPicker');

    // Notification Area
    const notificationArea = document.getElementById('notificationArea');

    // Function to display notifications
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.textContent = message;
        notificationArea.appendChild(notification);

        // Remove the notification after a few seconds
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    // Function to generate certificate content
    function generateCertificate(courseName, studentName, completionDate, instructorName, signatureLogo, fontStyle, fontSize, color) {
        const formattedDate = new Date(completionDate).toLocaleDateString();

        // Create certificate elements
        const certificateHTML = `
            <h2>Certificate of Completion</h2>
            <p>This certificate is awarded to</p>
            <h3>${studentName}</h3>
            <p>For successfully completing</p>
            <h4>${courseName}</h4>
            <p>On</p>
            <p>${formattedDate}</p>
            <p>Signed,</p>
            <p>${instructorName}</p>
            <p><img src="${signatureLogo}" alt="Signature/Logo" style="max-width: 100px;"></p>
        `;

        // Apply design options
        certificateContainer.innerHTML = certificateHTML;
        certificateContainer.style.fontFamily = fontStyle;
        certificateContainer.style.fontSize = fontSize + 'px';
        certificateContainer.style.color = color;
    }

    // Form Submission
    certificateForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate Inputs
        if (!certificateForm.checkValidity()) {
            event.stopPropagation();
            certificateForm.classList.add('was-validated');
            showNotification("Please fill in all required fields.", "error");
            return;
        }

        certificateForm.classList.remove('was-validated');

        const courseName = courseNameInput.value;
        const studentName = studentNameInput.value;
        const completionDate = completionDateInput.value;
        const instructorName = instructorNameInput.value;
        const signatureLogo = signatureLogoInput.value;
        const fontStyle = fontStyleSelect.value;
        const fontSize = fontSizeInput.value;
        const color = colorPicker.value;

        generateCertificate(courseName, studentName, completionDate, instructorName, signatureLogo, fontStyle, fontSize, color);
        showNotification("Certificate generated successfully!");

        // Clear the form after submission
        certificateForm.reset();
    });

    // Event listeners for design options
    fontStyleSelect.addEventListener('change', () => {
        const courseName = courseNameInput.value;
        const studentName = studentNameInput.value;
        const completionDate = completionDateInput.value;
        const instructorName = instructorNameInput.value;
        const signatureLogo = signatureLogoInput.value;
        const fontStyle = fontStyleSelect.value;
        const fontSize = fontSizeInput.value;
        const color = colorPicker.value;

        generateCertificate(courseName, studentName, completionDate, instructorName, signatureLogo, fontStyle, fontSize, color);
    });

    fontSizeInput.addEventListener('input', () => {
        const courseName = courseNameInput.value;
        const studentName = studentNameInput.value;
        const completionDate = completionDateInput.value;
        const instructorName = instructorNameInput.value;
        const signatureLogo = signatureLogoInput.value;
        const fontStyle = fontStyleSelect.value;
        const fontSize = fontSizeInput.value;
        const color = colorPicker.value;

        generateCertificate(courseName, studentName, completionDate, instructorName, signatureLogo, fontStyle, fontSize, color);
    });

    colorPicker.addEventListener('input', () => {
        const courseName = courseNameInput.value;
        const studentName = studentNameInput.value;
        const completionDate = completionDateInput.value;
        const instructorName = instructorNameInput.value;
        const signatureLogo = signatureLogoInput.value;
        const fontStyle = fontStyleSelect.value;
        const fontSize = fontSizeInput.value;
        const color = colorPicker.value;

        generateCertificate(courseName, studentName, completionDate, instructorName, signatureLogo, fontStyle, fontSize, color);
    });
});
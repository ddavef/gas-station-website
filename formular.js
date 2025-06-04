document.addEventListener("DOMContentLoaded", function() {
    var forms = document.getElementsByName("formular_contact");
    
    forms.forEach(function(formular) {
        formular.addEventListener("submit", function(event) {
            var elements = formular.elements;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var telefonRegex = /^\d{10}$/;
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            for (let i = 0; i < elements.length; i++) {
                if (elements[i].type !== "submit" && elements[i].value.trim() === "") {
                    alert("Va rog sa introduceti toate datele!");
                    event.preventDefault();
                    return;
                }
            }

            var email = formular["email_text"].value.trim();
            if (!emailRegex.test(email)) {
                alert("Va rog sa introduceti un email valid!");
                event.preventDefault();
                return;
            }

            var telefon = formular["phone"].value.trim();
            if (!telefonRegex.test(telefon)) {
                alert("Numarul de telefon trebuie sa aiba 10 caractere si sa contina doar cifre!");
                event.preventDefault();
                return;
            }

            if (formular.querySelector("#check_in") && formular.querySelector("#check_out")) {
                var checkIn = new Date(formular["check_in"].value);
                var checkOut = new Date(formular["check_out"].value);

                if (checkIn < today) {
                    alert("Data de check-in nu poate fi în trecut!");
                    event.preventDefault();
                    return;
                }

                if (checkOut <= checkIn) {
                    alert("Data de check-out trebuie să fie după data de check-in!");
                    event.preventDefault();
                    return;
                }

                var guests = parseInt(formular["guests"].value);
                if (isNaN(guests) || guests < 1 || guests > 4) {
                    alert("Numărul de oaspeți trebuie să fie între 1 și 4!");
                    event.preventDefault();
                    return;
                }

                var stayDuration = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
                if (stayDuration > 14) {
                    alert("Perioada de cazare nu poate depăși 14 zile!");
                    event.preventDefault();
                    return;
                }
            }
        });
    });
});
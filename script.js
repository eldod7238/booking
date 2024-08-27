document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const seats = document.getElementById('seats').value;
    const discord = document.getElementById('discord').value;
    const company = document.getElementById('company').value;
    const date = document.getElementById('date').value;

    const embed = {
        title: "حجز جديد",
        color: 0x0099ff,
        fields: [
            { name: "الاسم", value: name, inline: true },
            { name: "الوجهة", value: destination, inline: true },
            { name: "عدد المقاعد", value: seats, inline: true },
            { name: "حساب الديسكورد", value: discord, inline: true },
            { name: "شركة السياحة", value: company, inline: true },
            { name: "تاريخ الرحلة", value: date, inline: true }
        ],
        timestamp: new Date(),
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1277933355010232352/JvYIIWEYhDREvHAwgWsULbQl67I-YpAB5_SjQTUnZ3oN7g960pF8XJQE9ds7YeFKcrle';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ embeds: [embed] }),
    })
    .then(response => {
        if (response.ok) {
            alert('تم إرسال الحجز بنجاح!');
        } else {
            alert('حدث خطأ أثناء إرسال الحجز.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء إرسال الحجز.');
    });
});
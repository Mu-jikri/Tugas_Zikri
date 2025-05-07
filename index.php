<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Ujian</title>
</head>
<body>
    <h2>Formulir Ujian</h2>
    <form method="POST" action="index.php">
        <label for="nama">Nama:</label><br>
        <input type="text" id="nama" name="nama" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="nilai">Nilai Ujian:</label><br>
        <input type="number" id="nilai" name="nilai" min="0" max="100" required><br><br>

        <input type="submit" value="Submit">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Ambil data yang dikirimkan dari form
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        // Cek nilai ujian dan tentukan status
        if ($nilai > 70) {
            $status = "Lulus";
        } else {
            $status = "Remedial";
        }

        // Tampilkan hasil
        echo "<h3>Hasil Pengujian</h3>";
        echo "Nama: $nama<br>";
        echo "Email: $email<br>";
        echo "Nilai Ujian: $nilai<br>";
        echo "Status: $status<br>";
    }
    ?>
</body>
</html>

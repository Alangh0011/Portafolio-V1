<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtén los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ? $_POST['email'] : null;
    $message = htmlspecialchars($_POST['message']);

    // Verifica la validez de los datos
    if (!$name || !$email || !$message) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid form data']);
        exit;
    }

    // Configura el destinatario del correo electrónico
    $to = 'alanghescuela00@gmail.com';

    // Asunto del correo electrónico
    $subject = 'Nuevo mensaje de contacto';

    // Cuerpo del correo electrónico
    $body = "Nombre: $name\n";
    $body .= "Correo electrónico: $email\n";
    $body .= "Mensaje:\n$message";

    // Encabezados para el correo electrónico
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Intenta enviar el correo electrónico
    if (mail($to, $subject, $body, $headers)) {
        // Éxito: El correo electrónico se envió correctamente
        echo json_encode(['status' => 'success']);
    } else {
        // Error: No se pudo enviar el correo electrónico
        echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
    }
} else {
    // Si la solicitud no es POST, retorna un error
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ChetApp by Igor</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
</head>

<body>
    <div class="wrapper">
        <section class="form singup">
            <header>
                Realtime Chat app
            </header>
            <form action="#">
                <div class="error-txt">
                    This is an error message!
                </div>
                <div class="name-details">
                    <div class="field input">
                        <label>First name</label>
                        <input type="text" placeholder="First name">
                    </div>
                    <div class="field input">
                        <label>Last name</label>
                        <input type="text" placeholder="Last name">
                    </div>
                </div>
                <div class="field input">
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field image">
                    <label>Select image</label>
                    <input type="file">
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
                <div class="link">Already singed up? <a href="#">Login now</a></div>

            </form>
        </section>
    </div>

    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/singup.js"></script>
</body>

</html>
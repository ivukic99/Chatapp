<?php include_once "header.php" ?>
<body>
    <div class="wrapper">
        <section class="form login">
            <header>
                Chat app
            </header>
            <form action="#" enctype="multipart/form-data">
                <div class="error-txt">
                    
                </div>
                <div class="field input">
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Enter your email" required>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
                <div class="link">Not yet singed up? <a href="index.php">Singup now</a></div>

            </form>
        </section>
    </div>
    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/login.js"></script>
</body>

</html>
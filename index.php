<?php 
    session_start();
    if(isset($_SESSION['unique_id'])){
        header("Location: users.php");
    }
?>
<?php include_once "header.php" ?>
<body>
    <div class="wrapper">
        <section class="form singup">
            <header>
                Chat app
            </header>
            <form action="#" enctype="multipart/form-data" autocomplete="off">
                <div class="error-txt">
                    
                </div>
                <div class="name-details">
                    <div class="field input">
                        <label>First name</label>
                        <input type="text" name="fname" placeholder="First name" required>
                    </div>
                    <div class="field input">
                        <label>Last name</label>
                        <input type="text" name="lname" placeholder="Last name" required>
                    </div>
                </div>
                <div class="field input">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Enter your email" required>
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password" required>
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field image">
                    <label>Select image</label>
                    <input type="file" name="image" required>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
                <div class="link">Already singed up? <a href="login.php">Login now</a></div>

            </form>
        </section>
    </div>

    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/singup.js"></script>
</body>

</html>
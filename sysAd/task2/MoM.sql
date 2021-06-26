# Check location of secure_file_priv
SELECT @@GLOBAL.secure_file_priv;

# Copy the MoM text file into secure_file_priv
cp /home/Jay_Jay/MoM.txt /var/lib/mysql-files/MoM.txt

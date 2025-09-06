package org.example;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class LoginScreen extends JFrame implements ActionListener {

    // Components
    JLabel userLabel, passLabel;
    JTextField userText;
    JPasswordField passText;
    JButton loginButton;

    public LoginScreen() {
        // Frame settings
        setTitle("Login Screen");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // center the window

        // Panel
        JPanel panel = new JPanel();
        panel.setLayout(null); // using absolute layout for simplicity

        // Username Label
        userLabel = new JLabel("Username:");
        userLabel.setBounds(50, 30, 100, 25);
        panel.add(userLabel);

        // Username TextField
        userText = new JTextField();
        userText.setBounds(150, 30, 150, 25);
        panel.add(userText);

        // Password Label
        passLabel = new JLabel("Password:");
        passLabel.setBounds(50, 70, 100, 25);
        panel.add(passLabel);

        // Password Field
        passText = new JPasswordField();
        passText.setBounds(150, 70, 150, 25);
        panel.add(passText);

        // Login Button
        loginButton = new JButton("Login");
        loginButton.setBounds(150, 110, 100, 25);
        loginButton.addActionListener(this); // attach listener
        panel.add(loginButton);

        // Add panel to frame
        add(panel);
        setVisible(true);
    }

    // Handle button click
    @Override
    public void actionPerformed(ActionEvent e) {
        String username = userText.getText();
        String password = new String(passText.getPassword());

        if(username.equals("admin") && password.equals("1234")) {
            JOptionPane.showMessageDialog(this, "Login Successful!");
        } else {
            JOptionPane.showMessageDialog(this, "Invalid username or password", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

}
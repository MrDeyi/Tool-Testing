package org.example;

import javax.swing.*;

public class App extends JFrame {

    public App(){

        JFrame frame = new JFrame();
        frame.setSize(420,420);
        frame.setResizable(false);
        frame.setTitle("First JFrame App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        ImageIcon imageIcon = new ImageIcon("/2.jpg");
        frame.setIconImage(imageIcon.getImage());
    }

}

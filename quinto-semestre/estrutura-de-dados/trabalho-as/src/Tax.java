public class Tax implements ISpace {
    @Override
    public void action(Player player) {
        double playerSalaryMinus5percent = player.getSalary() * 5 / 100;
        player.setBankBalance(player.getBankBalance() + playerSalaryMinus5percent);

        System.out.println(String.format(
                "VOCÊ PAGOU %.2f DE IMPOSTO",
                player.getSalary() - playerSalaryMinus5percent));
    }

    @Override
    public String getDescription() {
        return "Imposto";
    }
}

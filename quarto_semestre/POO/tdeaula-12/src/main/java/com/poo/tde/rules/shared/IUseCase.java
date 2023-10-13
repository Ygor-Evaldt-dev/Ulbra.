package rules.shared;

public interface IUseCase<I, O> {
    public O execute(I input);
}

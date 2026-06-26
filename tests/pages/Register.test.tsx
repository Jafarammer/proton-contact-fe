import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "@/pages";
import { renderWithRouter } from "../utils/renderWithRouter";

let mockLocationSearch = "";

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );

  return {
    ...actual,
    useLocation: () => ({
      search: mockLocationSearch,
    }),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
  mockLocationSearch = "";
});

describe("RENDER", () => {
  it("should] render text", () => {
    renderWithRouter(<Register />);
    const title: string = "Proton Contact";
    const desc: string = "Efficiency. Reliabillity. Precision.";
    const titleForm: string = "Create an account";
    const descForm: string =
      "Manage your profesional network with calm control.";
    const textLink: string = "Already have an account ?";

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(desc)).toBeInTheDocument();
    expect(screen.getByText(titleForm)).toBeInTheDocument();
    expect(screen.getByText(descForm)).toBeInTheDocument();
    expect(screen.getByText(textLink)).toBeInTheDocument();
  });

  it("should render full name input", () => {
    renderWithRouter(<Register />);
    const fullNameInput = screen.getByLabelText("Full Name");
    expect(fullNameInput).toBeInTheDocument();
    expect(fullNameInput).toHaveAttribute("name", "fullName");
    expect(fullNameInput).toHaveAttribute("type", "text");
  });

  it("should render email input", () => {
    renderWithRouter(<Register />);
    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("type", "email");
  });

  it("should render password input", () => {
    renderWithRouter(<Register />);
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("name", "password");
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should render confirm password input", () => {
    renderWithRouter(<Register />);
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toHaveAttribute("name", "confirmPassword");
    expect(confirmPasswordInput).toHaveAttribute("type", "password");
  });

  it("should render register button", () => {
    renderWithRouter(<Register />);

    const button = screen.getByRole("button", {
      name: /register/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("should render log in link", () => {
    renderWithRouter(<Register />);

    const link = screen.getByRole("link", {
      name: /Log in/i,
    });

    expect(link).toHaveAttribute("href", "/");
  });
});

describe("USER EVENT", () => {
  it("should show password when eye icon is clicked", async () => {
    renderWithRouter(<Register />);

    const password = screen.getByLabelText("Password");
    expect(password).toHaveAttribute("type", "password");

    const eyeIcon = screen.getAllByLabelText("eye-invisible");

    await userEvent.click(eyeIcon[0]);

    expect(password).toHaveAttribute("type", "text");
  });

  it("should show confirm password when eye icon is clicked", async () => {
    renderWithRouter(<Register />);

    const confirmPassword = screen.getByLabelText("Confirm Password");
    expect(confirmPassword).toHaveAttribute("type", "password");

    const eyeIcon = screen.getAllByLabelText("eye-invisible");

    await userEvent.click(eyeIcon[1]);

    expect(confirmPassword).toHaveAttribute("type", "text");
  });
});

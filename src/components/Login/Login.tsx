// Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

interface LoginFormData {
    username: string;
    password: string;
    rememberMe: boolean;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginFormData>({
        username: '',
        password: '',
        rememberMe: false,
    });
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Проверка, не залогинен ли уже пользователь
    useEffect(() => {
        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (user) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const validateForm = (): boolean => {
        const newErrors: { username?: string; password?: string } = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Введите имя пользователя';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Имя должно содержать минимум 3 символа';
        }

        if (!formData.password) {
            newErrors.password = 'Введите пароль';
        } else if (formData.password.length < 4) {
            newErrors.password = 'Пароль должен содержать минимум 4 символа';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        // Имитация задержки запроса
        await new Promise(resolve => setTimeout(resolve, 800));

        // Сохраняем в localStorage/sessionStorage
        const userData = {
            username: formData.username,
            loginTime: new Date().toISOString(),
            isAuthenticated: true,
        };

        if (formData.rememberMe) {
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('rememberMe', 'true');
        } else {
            sessionStorage.setItem('user', JSON.stringify(userData));
            sessionStorage.setItem('rememberMe', 'false');
        }

        setIsLoading(false);
        navigate('/dashboard');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Очищаем ошибку при вводе
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <h1 className={styles.title}>Добро пожаловать</h1>
                    <p className={styles.subtitle}>Войдите в свой аккаунт</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Username */}
                    <div className={styles.fieldGroup}>
                        <label htmlFor="username" className={styles.label}>
                            Имя пользователя
                        </label>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Введите имя пользователя"
                                className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
                                disabled={isLoading}
                            />
                        </div>
                        {errors.username && <span className={styles.errorText}>{errors.username}</span>}
                    </div>

                    {/* Password */}
                    <div className={styles.fieldGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Пароль
                        </label>
                        <div className={styles.inputWrapper}>
                            <span className={styles.inputIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Введите пароль"
                                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.eyeButton}
                                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                    </div>

                    {/* Remember me & Forgot password */}
                    <div className={styles.rememberWrapper}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className={styles.checkbox}
                                disabled={isLoading}
                            />
                            <span>Запомнить меня</span>
                        </label>
                        <a href="#" className={styles.forgotLink}>
                            Забыли пароль?
                        </a>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`${styles.submitButton} ${isLoading ? styles.submitButtonDisabled : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <span className={styles.spinner} />
                                Вход...
                            </>
                        ) : (
                            'Войти'
                        )}
                    </button>

                    {/* Demo hint */}
                    <div className={styles.demoHint}>
                        <p className={styles.demoText}>
                            💡 Введите любые данные (минимум 3 символа для имени, 4 для пароля)
                        </p>
                    </div>
                </form>

                {/* Footer */}
                <div className={styles.footer}>
                    <p className={styles.footerText}>
                        Нет аккаунта? <a href="#" className={styles.footerLink}>Зарегистрироваться</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
package com.habitat.HABITAT.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
		auth.inMemoryAuthentication()
        .withUser("boaz").password(passwordEncoder().encode("boaz")).authorities("ROLE_ADMIN");
	}
	

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/usuario/logar").permitAll()
		.antMatchers("/usuario/cadastrar").permitAll()
		.antMatchers(HttpMethod.GET ,"/produto").permitAll()
        .antMatchers(HttpMethod.GET ,"/categoria").permitAll()
        .antMatchers(HttpMethod.GET ,"/categoria/id/{id}").permitAll()
        .antMatchers(HttpMethod.GET ,"/produto/id/{id}").permitAll()
        .antMatchers(HttpMethod.GET ,"/produto/todos").permitAll()
        .antMatchers(HttpMethod.GET ,"/categoria/todos").permitAll()
        .antMatchers(HttpMethod.POST ,"/categoria").permitAll()
        .antMatchers(HttpMethod.POST ,"/produto").permitAll()
        .antMatchers(HttpMethod.PUT ,"/categoria").permitAll()
        .antMatchers(HttpMethod.PUT ,"/produto").permitAll()
        .antMatchers(HttpMethod.DELETE ,"/categoria").permitAll()
        .antMatchers(HttpMethod.DELETE ,"/produto").permitAll()
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable();
	}	
}


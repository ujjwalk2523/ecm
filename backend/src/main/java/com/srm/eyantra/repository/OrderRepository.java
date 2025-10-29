package com.srm.eyantra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.srm.eyantra.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}

// OrderController.java
package com.srm.eyantra.controller;

import com.srm.eyantra.model.Order;
import com.srm.eyantra.service.OrderService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // ✅ Existing single order endpoint (keep it)
    @PostMapping("/create")
    public Order createOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }

    // ✅ New endpoint for multiple orders
    @PostMapping("/create-multiple")
    public List<Order> createMultipleOrders(@RequestBody List<Order> orders) {
        if (orders.size() > 10) {
            throw new IllegalArgumentException("Maximum 10 orders allowed at a time.");
        }
        return orders.stream()
                .map(orderService::saveOrder)
                .toList();
    }

    @GetMapping
    public List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @PutMapping("/{id}/status")
    public Order updateStatus(@PathVariable Long id, @RequestParam String status) {
        return orderService.updateStatus(id, status);
    }
}

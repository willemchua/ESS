package app.cms.repository;

import app.cms.model.OvertimeRequest;
import app.cms.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by adeliadjuarto on 10/12/17.
 */
public interface OvertimeRequestRepository extends JpaRepository<OvertimeRequest, String> {
    public List<OvertimeRequest> findByIsActive(Boolean isActive);
    public List<OvertimeRequest> findByUserAndIsActive(User user, Boolean isActive);
    public List<OvertimeRequest> findByUserInAndIsActiveAndIsApprovedNull(List<User> users, Boolean isActive);
}
